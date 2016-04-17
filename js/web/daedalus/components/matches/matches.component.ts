import { Component, OnInit, OnChanges, SimpleChange, ChangeDetectionStrategy } from 'angular2/core';
import { COMMON_DIRECTIVES } from 'angular2/common';
import { FORM_DIRECTIVES } from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from 'angular2/router';
import { DotaMatchesService } from '../../services/dotaMatches.service' ;

export enum ISkillType {
    any = 0,
    normal = 1,
    high = 2,
    very_high = 3
}

interface IMatchesResult {
    matches: any[];
}

@Component({
    selector: 'dota-matches',
    directives: [COMMON_DIRECTIVES],
    template: `
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <ul class="list-group" *ngFor="#match of matches">
                    <li class="list-group-item">
                        <span> {{ match.match_seq_num }} </span>
                        <span> {{ match.players.length }} </span>
                        <button (click)="goTo(match.match_id)" class="btn btn-success">Match Details</button>		
                    </li>
                </ul>
            </div>    
        </div>
    </div>
    `
})
export class MatchesComponent implements OnInit {

    public result: IMatchesResult;
    
    public matches: any[];
    
    private matchesService: DotaMatchesService;
    
    private router: Router;
    
    constructor(
        matchesService: DotaMatchesService, 
        router: Router
    ) {
        this.router = router;
        this.matchesService = matchesService;
    }
    
    ngOnInit(): void {
        this.result = { matches: [] };
        this.getData();
    }
    
    public getData(): any {
        this.matchesService.getMatches()
        .subscribe(
            res => {
                this.result = res ;
                this.matches = this.result.matches; 
            },
            err => console.log("HEY, something went wrongable", err),
            () => console.log('complete message')
        );
    }
    
    public goTo(matchId: string): void {
        this.router.parent.navigate(['MatchDetail', { id: matchId }])
    }
    
}

//<span> {{ match.start_time | date : 'short' }} </span>
