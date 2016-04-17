System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../services/dotaMatches.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, dotaMatches_service_1;
    var ISkillType, MatchesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dotaMatches_service_1_1) {
                dotaMatches_service_1 = dotaMatches_service_1_1;
            }],
        execute: function() {
            (function (ISkillType) {
                ISkillType[ISkillType["any"] = 0] = "any";
                ISkillType[ISkillType["normal"] = 1] = "normal";
                ISkillType[ISkillType["high"] = 2] = "high";
                ISkillType[ISkillType["very_high"] = 3] = "very_high";
            })(ISkillType || (ISkillType = {}));
            exports_1("ISkillType", ISkillType);
            MatchesComponent = (function () {
                function MatchesComponent(matchesService, router) {
                    this.router = router;
                    this.matchesService = matchesService;
                }
                MatchesComponent.prototype.ngOnInit = function () {
                    this.result = { matches: [] };
                    this.getData();
                };
                MatchesComponent.prototype.getData = function () {
                    var _this = this;
                    this.matchesService.getMatches()
                        .subscribe(function (res) {
                        _this.result = res;
                        _this.matches = _this.result.matches;
                    }, function (err) { return console.log("HEY, something went wrongable", err); }, function () { return console.log('complete message'); });
                };
                MatchesComponent.prototype.goTo = function (matchId) {
                    this.router.parent.navigate(['MatchDetail', { id: matchId }]);
                };
                MatchesComponent = __decorate([
                    core_1.Component({
                        selector: 'dota-matches',
                        directives: [common_1.COMMON_DIRECTIVES],
                        template: "\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                <ul class=\"list-group\" *ngFor=\"#match of matches\">\n                    <li class=\"list-group-item\">\n                        <span> {{ match.match_seq_num }} </span>\n                        <span> {{ match.players.length }} </span>\n                        <button (click)=\"goTo(match.match_id)\" class=\"btn btn-success\">Match Details</button>\t\t\n                    </li>\n                </ul>\n            </div>    \n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [dotaMatches_service_1.DotaMatchesService, router_1.Router])
                ], MatchesComponent);
                return MatchesComponent;
            }());
            exports_1("MatchesComponent", MatchesComponent);
        }
    }
});
//# sourceMappingURL=matches.component.js.map