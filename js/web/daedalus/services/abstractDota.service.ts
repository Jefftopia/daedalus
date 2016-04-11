import { Http } from 'angular2/http';

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

    protected _get(url: string) {
        return this.http.get(url + DotaRestDao.REQUEST_SUFFIX).map(res => {
            return res.json();
        })
    }
    
    protected _query(url: string) {
        //TODO: serialize search using rules above;
    }
    
    /**
     * ////
     * LEGACY
     * ////
     */

    public getData(options: getDataOptions) {
        if (options.baseUrl == null)
            throw 'Dota data request requires a baseUrl';
            
        let paramString: string = this.processRequestParams(options.filterOptions);

        if (options.useKey)
            paramString = paramString + DotaRestDao.REQUEST_SUFFIX;
        
        return this.http.get(options.baseUrl + paramString).map(res => {
            return res.json();
        });

    }

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