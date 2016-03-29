var Steam = require("steam");
var Dota2 = require("dota2");
var request = require('request');
var SteamTotp = require('steam-totp');
var urllib = require('url');
var async = require('async');
var job = require('./generateJob');
var fs = require('fs');
var sha1 = require('sha1');

var steamObj = {};
//id: 76561198008667129

var config = {
    steam_name: 'Jefftopia',
    steam_user: 'jsmith6690',
    steam_pass: 'Taiasw0rd1',
    steam_guard_code: 'TKG9D',
    cwd: '',
    steam_response_timeout: 1000*30,
    request_timeout: 1000*30
}

var a = [0];

async.each(a, function(i, cb)
{
    var dotaReady = false;
    var relationshipReady = false;
    var client = new Steam.SteamClient();
    client.steamUser = new Steam.SteamUser(client);
    client.steamFriends = new Steam.SteamFriends(client);
    client.Dota2 = new Dota2.Dota2Client(client, false, false);
    
    // var user = users[i];
    // var pass = passes[i];

    var user = 'jsmith6690';
    var fa = fs.readFileSync(user + '.2fa', 'utf-8');
    var sharedSecret = JSON.parse(fa).shared_secret;

    var matchId = 2213242172;

    // var user = config.steam_user;
    var pass = config.steam_pass;
    //var authcode = 'W627F';

    var logOnDetails = {
        "account_name": user,
        "password": pass
    };    
    
    var sentry = fs.readFileSync("sentry");
    if (sharedSecret) logOnDetails.two_factor_code = SteamTotp.generateAuthCode(sharedSecret);
    if (sentry.length) logOnDetails.sha_sentryfile = sha1(sentry);
    
    console.log('logOnDetails: ', logOnDetails);
    
    client.connect();
    client.on('connected', function()
    {
        console.log("[STEAM] Trying to log on with %s,%s", user, pass);
        
        client.steamUser.on('updateMachineAuth', function(e) {
            fs.writeFileSync('sentry', e.bytes);
            console.log('update machine auth');
        });        
        client.steamUser.logOn(logOnDetails);
        client.once('error', function onSteamError(e)
        {
            console.log(e);
            console.log("reconnecting");
            client.connect();
        });
    });
    client.on("logOnResponse", function(logonResp)
    {
        if (logonResp.eresult !== Steam.EResult.OK)
        {
            //try logging on again
            return client.steamUser.logOn(logOnDetails);
        }
        console.log("[STEAM] Logged on %s", client.steamID);
        client.steamFriends.setPersonaName(client.steamID);
        client.replays = 0;
        client.profiles = 0;
        client.Dota2.once("ready", function()
        {
            console.log("Dota 2 ready");
            steamObj[client.steamID] = client;
            dotaReady = true;
            
            var match;
            
            client.Dota2.requestMatchDetails(matchId, function(err,res) {
                match = res.match;
                //fs.writeFileSync('data.json', JSON.stringify(res));
                
                fs.writeFile('data.json', JSON.stringify(res.match), function(err, res) {
                    if (err)
                        console.log('ERR!!: ', err)
                });
                
                var url = "http://replay" + match.cluster + ".valve.net/570/" + match.match_id + "_" + match.replay_salt + ".dem.bz2";

                console.log(url);

                request(url).pipe(fs.createWriteStream(match.match_id + '.dem.bz2'));
                
                console.log('complete');
                
            });
            
            //allDone();
        });
        client.Dota2.launch();
        client.once('loggedOff', function()
        {
            console.log("relogging");
            client.steamUser.logOn(logOnDetails);
        });
    });
    var cycled = false;

    function allDone()
    {
        if (dotaReady)
        {
            count += 1;
            console.log("acct %s ready, %s/%s", i, count, users.length);
            if (!cycled)
            {
                cycled = true;
                cb();
            }
        }
    }
});

/*
replayUrl: util.format("http://replay%s.valve.net/570/%s_%s.dem.bz2", data.cluster, data.id, data.salt)
*/