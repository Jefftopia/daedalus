import { Http } from 'angular2/http';
import { DotaRestDao } from './abstractDota.service';
 
export class DotaMatchDetailService extends DotaRestDao {

    public static BASE_URL: string = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?';
    
    constructor() {
        super(http: Http);
    }

    public getMatchDetails(): any {   
        return this._get(DotaMatchDetailService.BASE_URL);
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