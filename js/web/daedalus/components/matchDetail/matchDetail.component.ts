import { Component, OnInit, OnChanges, SimpleChange, ChangeDetectionStrategy } from 'angular2/core';
import { COMMON_DIRECTIVES } from 'angular2/common';
import { FORM_DIRECTIVES } from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES, Router, RouteParams } from 'angular2/router';
import { DotaMatchDetailService } from '../../services/dotaMatchDetail.service';
import { ItemMap } from '../../services/dotaItemMap.service' ;
import { HeroMap } from '../../services/dotaHeroMap.service' ;

export interface DotaHttpMatchDetailsOptions {
    matchId: string;
}

@Component({
    selector: 'dota-match-details',
    directives: [COMMON_DIRECTIVES],
    template: `
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Match <span>{{ matchDetails.match_id }}</span> Details</div>
                <div class="panel-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Duration</th>
                                <th>First Blood Time</th>
                                <th># Human Players</th>
                                <th>Radiant Win?</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {{ matchDetails.duration }} </td>
                                <td> {{ matchDetails.first_blood_time }} </td>
                                <td> {{ matchDetails.human_players }} </td>
                                <td> {{ matchDetails.radient_win }} </td>
                            </tr>
                        </tbody>	
                    </table>
                </div>
                <div class="panel-footer">
                    <button (click)="showRes()" class="btn btn-primary">Log Details</button>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">Player Info</div>
                <div class="panel-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Hero</th>
                                <th>Level</th>
                                <th>Gold Spent</th>
                                <th>Kills</th>
                                <th>Deaths</th>
                                <th>Assists</th>
                                <th>Last Hits</th>
                                <th>Denies</th>
                                <th>GPM</th>
                                <th>XPM</th>
                                <th>Items</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr *ng-for="#player of matchDetails.players">
                                <td>{{ player.account_id }}</td>
                                <td><img [src]="getHeroImage(player.hero_id)"></img>{{ player.hero_id }}</td>
                                <td>{{ player.level }}</td>
                                <td>{{ player.gold_spent }}</td>
                                <td>{{ player.kills }}</td>
                                <td>{{ player.deaths }}</td>
                                <td>{{ player.assists }}</td>
                                <td>{{ player.last_hits }}</td>
                                <td>{{ player.denies }}</td>
                                <td>{{ player.gold_per_min }}</td>
                                <td>{{ player.xp_per_min }}</td>
                                <td><img [src]="getItemImage(player.item_0)"></img></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="panel-footer">
                </div>
            </div>
        </div>
    `    
})
export class MatchDetailComponent implements OnInit {

    private matchDetailService: DotaMatchDetailService;

    private routeParams: RouteParams;

    public matchDetails: any;
    
    public matchId: string|number;
    
    public heroMap: HeroMap;
    
    public itemMap: ItemMap;
            
    constructor(
        matchDetailService: DotaMatchDetailService, 
        routeParams: RouteParams, 
        heroMap: HeroMap, 
        itemMap: ItemMap
    ) {
        this.matchDetailService = matchDetailService;
        this.routeParams = routeParams;
        this.heroMap = heroMap;
        this.itemMap = itemMap;
    }

    ngOnInit(): void {
        this.matchDetails = { data: [] };
        this.matchId = this.routeParams.get('matchId'); 
        this.getData();
    }
        
    public getData(): any {
        this.matchDetailService.getMatchDetails()
        .subscribe(
            res => this.matchDetails = res.matchDetails,
            err => console.log("HEY, something went wrongable", err),
            () => console.log('complete message')
        );
        
    }
        
    public getItemImage(id: string, imageSize: number = 1): string {
        return ItemMap.HERO_IMG_BASE_URL + this.itemMap.toPhotoString(id,imageSize);        
    }
    
    public getHeroImage(id: number,imageSize: number = 0): string {
        return HeroMap.HERO_IMG_BASE_URL + this.heroMap.toPhotoString(id,imageSize);
    }
    
}