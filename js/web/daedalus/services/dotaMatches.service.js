System.register(['angular2/core', './abstractDota.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, abstractDota_service_1;
    var ISkillType, DotaMatchesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
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
            DotaMatchesService = (function () {
                function DotaMatchesService(dotaRestDao) {
                    this.dotaRestDao = dotaRestDao;
                }
                DotaMatchesService.prototype.getMatches = function () {
                    return this.dotaRestDao.get(DotaMatchesService.BASE_URL);
                };
                DotaMatchesService.prototype.query = function () {
                };
                DotaMatchesService.BASE_URL = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?';
                DotaMatchesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [abstractDota_service_1.DotaRestDao])
                ], DotaMatchesService);
                return DotaMatchesService;
            }());
            exports_1("DotaMatchesService", DotaMatchesService);
        }
    }
});
//# sourceMappingURL=dotaMatches.service.js.map