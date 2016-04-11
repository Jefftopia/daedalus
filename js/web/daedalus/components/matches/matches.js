System.register(['angular2/core', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var ISkillType, MatchesView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            (function (ISkillType) {
                ISkillType[ISkillType["any"] = 0] = "any";
                ISkillType[ISkillType["normal"] = 1] = "normal";
                ISkillType[ISkillType["high"] = 2] = "high";
                ISkillType[ISkillType["very_high"] = 3] = "very_high";
            })(ISkillType || (ISkillType = {}));
            exports_1("ISkillType", ISkillType);
            MatchesView = (function () {
                function MatchesView(matchesService, router) {
                    this.router = router;
                    this.result = { matches: [] };
                    this.matchesService = matchesService;
                }
                MatchesView.prototype.getMatches = function (filters) {
                    var _this = this;
                    return this.dataService.getData({
                        baseUrl: MatchesView.MATCH_HISTORY_BASE,
                        useKey: true
                    }).subscribe(function (res) { return _this.result = res.result; }, function (err) { return console.log("HEY, something went wrongable", err); }, function () { return console.log('complete message'); });
                };
                MatchesView.prototype.goTo = function (matchId) {
                    this.router.parent.navigate(['./MatchDetails', { matchId: matchId }]);
                };
                MatchesView.MATCH_HISTORY_BASE = 'https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?';
                MatchesView = __decorate([
                    core_1.Component({
                        selector: 'matches-view',
                        templateUrl: './components/matches/matches.html',
                        directives: [CORE_DIRECTIVES],
                        providers: [DotaMatchesService]
                    }), 
                    __metadata('design:paramtypes', [Object, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
                ], MatchesView);
                return MatchesView;
                var _a;
            })();
            exports_1("MatchesView", MatchesView);
        }
    }
});
//# sourceMappingURL=matches.js.map