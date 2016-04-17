System.register(['./abstractDota.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var abstractDota_service_1;
    var DotaMatchDetailService;
    return {
        setters:[
            function (abstractDota_service_1_1) {
                abstractDota_service_1 = abstractDota_service_1_1;
            }],
        execute: function() {
            DotaMatchDetailService = (function (_super) {
                __extends(DotaMatchDetailService, _super);
                function DotaMatchDetailService() {
                    _super.apply(this, arguments);
                }
                DotaMatchDetailService.prototype.getMatchDetails = function () {
                    return this._get(DotaMatchDetailService.BASE_URL);
                };
                DotaMatchDetailService.prototype.query = function () {
                };
                DotaMatchDetailService.BASE_URL = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?';
                return DotaMatchDetailService;
            }(abstractDota_service_1.DotaRestDao));
            exports_1("DotaMatchDetailService", DotaMatchDetailService);
        }
    }
});
//# sourceMappingURL=dotaMatchDetail.service.js.map