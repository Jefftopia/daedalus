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

@Component({
    selector: 'dota-matches',
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="items-view">
                    <div class="panel panel-default" *ng-for="#match of result.matches">
                        <div class="panel-heading"><a (click)="goTo(match.match_id)">{{ match.match_id }}</a></div>
                        <div class="panel-body">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Start Time</th>
                                        <th> Sequence #</th>
                                        <th> # Players </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> {{ match.start_time | date : 'short' }} </td>
                                        <td> {{ match.match_seq_num }} </td>
                                        <td> {{ match.players.length }} </td>
                                    </tr>
                                </tbody>	
                            </table>
                            
                        </div>
                        <div class="panel-footer">
                            <button (click)="goTo(match.match_id)" class="btn btn-success">Match Details</button>		
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div>
    `,
    directives: [COMMON_DIRECTIVES]
})
export class DotaMatches implements OnInit {

    public result: {};
    
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
            res => this.result = res.result,
            err => console.log("HEY, something went wrongable", err),
            () => console.log('complete message')
        );
    }
    
    public goTo(matchId: string): void {
        this.router.parent.navigate(['./MatchDetail', { matchId: matchId }])
    }
    
}