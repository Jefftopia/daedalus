function generateJob(type, payload) {
    var api_url = "http://api.steampowered.com";
    var api_key = '7BBDF6F696BB0FA975E8F70C5BBE1716';
    var opts = {};
    opts.api_details = apiDetails;
    opts.api_history = apiHistory;
    opts.api_summaries = apiSummaries;
    opts.api_sequence = apiSequence;
    opts.api_Heroes = apiHeroes;
    opts.api_league = apiLeagues;
    opts.api_skill = apiSkill;
    opts.api_live = apiLive;
    opts.api_notable = apiNotable;

    return opts[type]();
    
    function apiDetails() {
        return {
            url: api_url + "/IDOTA2Match_570/GetMatchDetails/V001/?key=" + api_key + "&match_id=" + payload.match_id,
            title: [type, payload.match_id].join(),
            type: "api",
            payload: payload
        };
    }
    
    function apiHistory() {
        return {
            url: api_url + "/IDOTA2Match_570/GetMatchHistory/V001/?key=" + api_key + (payload.account_id ? "&account_id=" + payload.account_id : "") + (payload.matches_requested ? "&matches_requested=" + payload.matches_requested : "") + (payload.hero_id ? "&hero_id=" + payload.hero_id : "") + (payload.leagueid ? "&league_id=" + payload.leagueid : ""),
            title: [type, payload.account_id].join(),
            type: "api",
            payload: payload
        };
    }
    
    function apiSummaries() {
        return {
            url: api_url + "/ISteamUser/GetPlayerSummaries/v0002/?key=" + api_key + "&steamids=" + payload.players.map(function(p)
            {
                return convert32to64(p.account_id).toString();
            }).join(),
            title: [type, payload.summaries_id].join(),
            type: "api",
            payload: payload
        };
    }
    
    function apiSequence() {
        return {
            url: api_url + "/IDOTA2Match_570/GetMatchHistoryBySequenceNum/V001/?key=" + api_key + "&start_at_match_seq_num=" + payload.start_at_match_seq_num,
            title: [type, payload.seq_num].join(),
            type: "api"
        };
    }
     
    function apiHeroes() {
        return {
            url: api_url + "/IEconDOTA2_570/GetHeroes/v0001/?key=" + api_key + "&language=" + payload.language,
            title: [type, payload.language].join(),
            type: "api",
            payload: payload
        };
    }
     
    function apiLeagues() {
        return {
            url: api_url + "/IDOTA2Match_570/GetLeagueListing/v0001/?key=" + api_key,
            title: [type].join(),
            type: "api",
            payload: payload
        };
    }
     
    function apiSkill() {
        return {
            url: api_url + "/IDOTA2Match_570/GetMatchHistory/v0001/?key=" + api_key + "&start_at_match_id=" + payload.start_at_match_id + "&skill=" + payload.skill + "&hero_id=" + payload.hero_id + "&min_players=10",
            title: [type, payload.skill].join(),
            type: "api",
            payload: payload
        };
    }
    
    function apiLive() {
        return {
            url: api_url + "/IDOTA2Match_570/GetLiveLeagueGames/v0001/?key=" + api_key,
            title: [type].join(),
            type: "api",
            payload: payload
        };
    }
     
    function apiNotable() {
        return {
            url: api_url + "/IDOTA2Fantasy_570/GetProPlayerList/v1/?key=" + api_key,
            title: [type].join(),
            type: "api",
            payload: payload
        };
    }
     
    function parse() {
        return {
            title: [type, payload.match_id].join(),
            type: type,
            url: payload.url,
            payload: payload
        };
    }
     
     function request() {
        return {
            url: api_url + "/IDOTA2Match_570/GetMatchDetails/V001/?key=" + api_key + "&match_id=" + payload.match_id,
            title: [type, payload.match_id].join(),
            type: type,
            request: true,
            payload: payload
        };
    }
    
    function fullhistory() {
        return {
            title: [type, payload.account_id].join(),
            type: type,
            payload: payload
        };
    }
     
    function mmr() {
        return {
            title: [type, payload.match_id, payload.account_id].join(),
            type: type,
            url: payload.url,
            payload: payload
        };
    }
     
    function cache() {
        return {
            title: [type, payload.match_id, payload.account_id].join(),
            type: type,
            payload: payload
        };
    }
    
     function rank() {
        return {
            title: [type, payload.account_id, payload.hero_id].join(),
            type: type,
            payload: payload
        };
    }
    
}

module.exports = generateJob;