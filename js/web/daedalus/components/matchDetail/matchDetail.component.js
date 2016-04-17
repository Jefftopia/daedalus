System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../services/dotaMatchDetail.service', '../../services/dotaItemMap.service', '../../services/dotaHeroMap.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, dotaMatchDetail_service_1, dotaItemMap_service_1, dotaHeroMap_service_1;
    var MatchDetailComponent;
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
            function (dotaMatchDetail_service_1_1) {
                dotaMatchDetail_service_1 = dotaMatchDetail_service_1_1;
            },
            function (dotaItemMap_service_1_1) {
                dotaItemMap_service_1 = dotaItemMap_service_1_1;
            },
            function (dotaHeroMap_service_1_1) {
                dotaHeroMap_service_1 = dotaHeroMap_service_1_1;
            }],
        execute: function() {
            MatchDetailComponent = (function () {
                function MatchDetailComponent(matchDetailService, routeParams, heroMap, itemMap) {
                    this.matchDetailService = matchDetailService;
                    this.routeParams = routeParams;
                    this.heroMap = heroMap;
                    this.itemMap = itemMap;
                }
                MatchDetailComponent.prototype.ngOnInit = function () {
                    this.matchDetails = { data: [] };
                    this.matchId = this.routeParams.get('matchId');
                    this.getData();
                };
                MatchDetailComponent.prototype.getData = function () {
                    var _this = this;
                    this.matchDetailService.getMatchDetails()
                        .subscribe(function (res) { return _this.matchDetails = res.matchDetails; }, function (err) { return console.log("HEY, something went wrongable", err); }, function () { return console.log('complete message'); });
                };
                MatchDetailComponent.prototype.getItemImage = function (id, imageSize) {
                    if (imageSize === void 0) { imageSize = 1; }
                    return dotaItemMap_service_1.ItemMap.HERO_IMG_BASE_URL + this.itemMap.toPhotoString(id, imageSize);
                };
                MatchDetailComponent.prototype.getHeroImage = function (id, imageSize) {
                    if (imageSize === void 0) { imageSize = 0; }
                    return dotaHeroMap_service_1.HeroMap.HERO_IMG_BASE_URL + this.heroMap.toPhotoString(id, imageSize);
                };
                MatchDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'dota-match-details',
                        directives: [common_1.COMMON_DIRECTIVES],
                        template: "\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">Match <span>{{ matchDetails.match_id }}</span> Details</div>\n                <div class=\"panel-body\">\n                    <table class=\"table table-hover\">\n                        <thead>\n                            <tr>\n                                <th>Duration</th>\n                                <th>First Blood Time</th>\n                                <th># Human Players</th>\n                                <th>Radiant Win?</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td> {{ matchDetails.duration }} </td>\n                                <td> {{ matchDetails.first_blood_time }} </td>\n                                <td> {{ matchDetails.human_players }} </td>\n                                <td> {{ matchDetails.radient_win }} </td>\n                            </tr>\n                        </tbody>\t\n                    </table>\n                </div>\n                <div class=\"panel-footer\">\n                    <button (click)=\"showRes()\" class=\"btn btn-primary\">Log Details</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">Player Info</div>\n                <div class=\"panel-body\">\n                    <table class=\"table table-hover\">\n                        <thead>\n                            <tr>\n                                <th>Player</th>\n                                <th>Hero</th>\n                                <th>Level</th>\n                                <th>Gold Spent</th>\n                                <th>Kills</th>\n                                <th>Deaths</th>\n                                <th>Assists</th>\n                                <th>Last Hits</th>\n                                <th>Denies</th>\n                                <th>GPM</th>\n                                <th>XPM</th>\n                                <th>Items</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ng-for=\"#player of matchDetails.players\">\n                                <td>{{ player.account_id }}</td>\n                                <td><img [src]=\"getHeroImage(player.hero_id)\"></img>{{ player.hero_id }}</td>\n                                <td>{{ player.level }}</td>\n                                <td>{{ player.gold_spent }}</td>\n                                <td>{{ player.kills }}</td>\n                                <td>{{ player.deaths }}</td>\n                                <td>{{ player.assists }}</td>\n                                <td>{{ player.last_hits }}</td>\n                                <td>{{ player.denies }}</td>\n                                <td>{{ player.gold_per_min }}</td>\n                                <td>{{ player.xp_per_min }}</td>\n                                <td><img [src]=\"getItemImage(player.item_0)\"></img></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"panel-footer\">\n                </div>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [dotaMatchDetail_service_1.DotaMatchDetailService, router_1.RouteParams, dotaHeroMap_service_1.HeroMap, dotaItemMap_service_1.ItemMap])
                ], MatchDetailComponent);
                return MatchDetailComponent;
            }());
            exports_1("MatchDetailComponent", MatchDetailComponent);
        }
    }
});
//# sourceMappingURL=matchDetail.component.js.map