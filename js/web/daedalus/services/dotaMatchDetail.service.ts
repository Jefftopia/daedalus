import { Injectable } from 'angular2/core';
import { DotaRestDao } from './abstractDota.service';
 
@Injectable() 
export class DotaMatchDetailService {

    private dotaRestDao: DotaRestDao;

    public static BASE_URL: string = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?';
    
    constructor(dotaRestDao: DotaRestDao) {
        this.dotaRestDao = dotaRestDao;
    }
    
    public getMatchDetails(matchId: string): any {
        return this.dotaRestDao.get(DotaMatchDetailService.BASE_URL + 'match_id=' + matchId);
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
    
}