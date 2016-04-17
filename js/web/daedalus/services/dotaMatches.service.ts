import { Injectable } from 'angular2/core';
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

@Injectable()
export class DotaMatchesService {

    private dotaRestDao: DotaRestDao;

    private static BASE_URL: string = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?';
        
    constructor(dotaRestDao: DotaRestDao) {        
        this.dotaRestDao = dotaRestDao;
    }    
        
    public getMatches(): any {   
        return this.dotaRestDao.get(DotaMatchesService.BASE_URL);
    }

    public query(): any {
        //return this._query();
    }

}