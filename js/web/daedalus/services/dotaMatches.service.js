System.register(['./abstractDota.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var abstractDota_service_1;
    var ISkillType, DotaMatchesService;
    return {
        setters:[
            function (abstractDota_service_1_1) {
                abstractDota_service_1 = abstractDota_service_1_1;
            }],
        execute: function() {
            (function (ISkillType) {
                ISkillType[ISkillType["any"] = 0] = "any";
                ISkillType[ISkillType["normal"] = 1] = "normal";
                ISkillType[ISkillType["high"] = 2] = "high";
                ISkillType[ISkillType["very_high"] = 3] = "very_high";
            })(ISkillType || (ISkillType = {}));
            exports_1("ISkillType", ISkillType);
            DotaMatchesService = (function (_super) {
                __extends(DotaMatchesService, _super);
                function DotaMatchesService() {
                    _super.apply(this, arguments);
                }
                DotaMatchesService.prototype.getMatches = function () {
                    return this._get(DotaMatchesService.BASE_URL);
                };
                DotaMatchesService.prototype.query = function () {
                };
                DotaMatchesService.BASE_URL = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?';
                return DotaMatchesService;
            }(abstractDota_service_1.DotaRestDao));
            exports_1("DotaMatchesService", DotaMatchesService);
        }
    }
});
//# sourceMappingURL=dotaMatches.service.js.map