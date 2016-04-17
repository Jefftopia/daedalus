import { Http, Response } from 'angular2/http';
//import { Observable } from 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*
    baseUrl: string =  'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?';
    parameterSequence: string = '<PARAM>=<VALUE>';
    urlSuffix: string = '&key<key>';
    query: 
        prefix with '?';
        join with '&';
    
    documentation at: http://dev.dota2.com/showthread.php?t=47115

*/
 
export interface getDataOptions {
    baseUrl: string,
    useKey: boolean,
    filterOptions?: Object
}

export abstract class DotaRestDao {

    private http: Http;
    
    private static API_KEY: string = '7BBDF6F696BB0FA975E8F70C5BBE1716';
    
    private static REQUEST_SUFFIX: string = '&key=7BBDF6F696BB0FA975E8F70C5BBE1716';
    
    constructor(http: Http) {
        this.http = http;
    }

    // returns observable array of any dota model data
    protected _get(url: string) {
        return this.http.get(url + DotaRestDao.REQUEST_SUFFIX)
            .map(this.extractData)
            .catch(this.errorHandler);
    }
    
    protected _query(url: string) {
        //TODO: serialize search using rules above;
    }
    
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || { };
    }
        
    private errorHandler(error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
                
    /**
     * ////
     * LEGACY
     * ////
     */

    // public getData(options: getDataOptions) {
    //     if (options.baseUrl == null)
    //         throw 'Dota data request requires a baseUrl';
            
    //     let paramString: string = this.processRequestParams(options.filterOptions);

    //     if (options.useKey)
    //         paramString = paramString + DotaRestDao.REQUEST_SUFFIX;
        
    //     return this.http.get(options.baseUrl + paramString).map(res => {
    //         return res.json();
    //     });

    // }

    //TODO: make better
    private processRequestParams(options: Object): string {

        if (options == null)
            return '';

        var paramString: string = '';
        
        Object.keys(options).forEach(function(prop: any, index: number) {

            var currentValue: any = options[prop];

            var currentKey: string = prop.replace(/([A-Z])/g, '_$1').trim().toLowerCase();
            
            if (currentValue instanceof Array) {
                
                for (let i = 0; i < currentValue.length; i++) {
                    
                    paramString += '&' + currentKey + '=' + currentValue[i].toString();

                }

            } else {

                paramString += '&' + currentKey + '=' + currentValue.toString();

            }

        });  
        
        return paramString;

    }

}
