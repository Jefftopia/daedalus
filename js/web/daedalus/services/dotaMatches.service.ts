import { Http } from 'angular2/http';
import { DotaRestDao } from './abstractDota.service';
 
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
 
export class DotaMatchesService extends DotaRestDao {

    private static BASE_URL: string = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?';
    
    constructor() {
        super(http: Http);
    }

    public getMatches(): any {   
        return this._get(DotaMatchesService.BASE_URL);
    }

    public query(): any {
        //return this._query();
    }

    // protected _get(url: string) {
    //     return this.http.get(url).map(res => {
    //         return res.json();
    //     })
    // }
    //}
    
    /*
        .subscribe(
            res => this.result = res.result,
            err => console.log("HEY, something went wrongable", err),
            () => console.log('complete message')
        );    
    */

}