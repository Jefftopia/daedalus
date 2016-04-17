import { Component, OnInit, OnChanges, SimpleChange, ChangeDetectionStrategy } from 'angular2/core';
import { COMMON_DIRECTIVES } from 'angular2/common';
import { FORM_DIRECTIVES } from 'angular2/common';
import { Router, RouteParams } from 'angular2/router';
import { DotaMatchDetailService } from '../../services/dotaMatchDetail.service';
import { ItemMap } from '../../services/dotaItemMap.service' ;
import { HeroMap } from '../../services/dotaHeroMap.service' ;

export interface DotaHttpMatchDetailsOptions {
    matchId: string;
}

@Component({
    selector: 'dota-match-details',
    directives: [COMMON_DIRECTIVES],
    providers: [ItemMap, HeroMap],
    template: `
        <div class="col-md-12">
            <div class="card">
                <div class="card-block">
                    <div class="card-title">Match <span>{{ matchDetails.match_id }}</span> Details</div>
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
                            <tr *ngFor="#player of matchDetails.players">
                                <td>{{ player.account_id }}</td>
                                <td><img [src]="getHeroImage(player.hero_id)" />{{ player.hero_id }}</td>
                                <td>{{ player.level }}</td>
                                <td>{{ player.gold_spent }}</td>
                                <td>{{ player.kills }}</td>
                                <td>{{ player.deaths }}</td>
                                <td>{{ player.assists }}</td>
                                <td>{{ player.last_hits }}</td>
                                <td>{{ player.denies }}</td>
                                <td>{{ player.gold_per_min }}</td>
                                <td>{{ player.xp_per_min }}</td>
                                <td><img [src]="getItemImage(player.item_0)" /></td>
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
    
    public matchId: string;
    
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
        this.matchId = this.routeParams.get('id'); 
        this.getData(this.matchId);
    }
        
    public getData(matchId: string): any {
        this.matchDetailService.getMatchDetails(matchId)
        .subscribe(
            res => { 
                console.log('result', res);
                this.matchDetails = res;
             },
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