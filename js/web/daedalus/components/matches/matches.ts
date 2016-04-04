import { Component, COMMON_DIRECTIVES } from 'angular2/core';
import { Router } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

export enum ISkillType {
    any = 0,
    normal = 1,
    high = 2,
    very_high = 3
}

export interface DotaHttpMatchHistoryOptions {
    playerName?: string[];
    heroId?: string[];
    skill?: ISkillType[];
    dateMin?: Date;
    dateMax?: Date;
    accountId?: string[];
    leagueId?: string[];
    startAtMatch?: string;
    matchesRequested?: number;
}

@Component({
    selector: 'matches-view',
    templateUrl: './components/matches/matches.html',
    directives: [CORE_DIRECTIVES]
    providers: [DotaMatchesService]
})
export class MatchesView {

    public result: {};
    
    protected matchesService: DotaMatchesService;
    
    protected router: Router;
    
    public static MATCH_HISTORY_BASE: string = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?';

    constructor(matchesService: DotaMatchesService, router: Router) {

        this.router = router;
        
        this.result = { matches: [] };

        this.matchesService = matchesService;

        // this.dataService.getData({
        //     baseUrl: MatchesView.MATCH_HISTORY_BASE,
        //     useKey: true
        // }).subscribe(
        //     res => this.result = res.result,
        //     err => console.log("HEY, something went wrongable", err),
        //     () => console.log('complete message')
        // );
    }

    public getMatches(filters?: DotaHttpMatchHistoryOptions): void {
    
        return this.dataService.getData({
            baseUrl: MatchesView.MATCH_HISTORY_BASE,
            useKey: true
        }).subscribe(
            res => this.result = res.result,
            err => console.log("HEY, something went wrongable", err),
            () => console.log('complete message')
        );
    
    }
    
    public goTo(matchId: string): void {
        this.router.parent.navigate(['./MatchDetails', { matchId: matchId }])
    }
    
}