System.register(['rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1;
    var DotaRestDao;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            DotaRestDao = (function () {
                function DotaRestDao(http) {
                    this.http = http;
                }
                DotaRestDao.prototype._get = function (url) {
                    return this.http.get(url + DotaRestDao.REQUEST_SUFFIX)
                        .map(this.extractData)
                        .catch(this.errorHandler);
                };
                DotaRestDao.prototype._query = function (url) {
                };
                DotaRestDao.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    return body.data || {};
                };
                DotaRestDao.prototype.errorHandler = function (error) {
                    var errMsg = error.message || 'Server error';
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                DotaRestDao.prototype.processRequestParams = function (options) {
                    if (options == null)
                        return '';
                    var paramString = '';
                    Object.keys(options).forEach(function (prop, index) {
                        var currentValue = options[prop];
                        var currentKey = prop.replace(/([A-Z])/g, '_$1').trim().toLowerCase();
                        if (currentValue instanceof Array) {
                            for (var i = 0; i < currentValue.length; i++) {
                                paramString += '&' + currentKey + '=' + currentValue[i].toString();
                            }
                        }
                        else {
                            paramString += '&' + currentKey + '=' + currentValue.toString();
                        }
                    });
                    return paramString;
                };
                DotaRestDao.API_KEY = '7BBDF6F696BB0FA975E8F70C5BBE1716';
                DotaRestDao.REQUEST_SUFFIX = '&key=7BBDF6F696BB0FA975E8F70C5BBE1716';
                return DotaRestDao;
            }());
            exports_1("DotaRestDao", DotaRestDao);
        }
    }
});
//# sourceMappingURL=abstractDota.service.js.map