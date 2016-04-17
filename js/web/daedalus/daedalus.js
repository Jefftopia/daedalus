System.register(['angular2/core', 'angular2/router', './components/launchPad/launchPad.component', './components/matchDetail/matchDetail.component', './components/matches/matches.component'], function(exports_1, context_1) {
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
    var core_1, router_1, launchPad_component_1, matchDetail_component_1, matches_component_1;
    var Daedalus;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (launchPad_component_1_1) {
                launchPad_component_1 = launchPad_component_1_1;
            },
            function (matchDetail_component_1_1) {
                matchDetail_component_1 = matchDetail_component_1_1;
            },
            function (matches_component_1_1) {
                matches_component_1 = matches_component_1_1;
            }],
        execute: function() {
            Daedalus = (function () {
                function Daedalus(router) {
                    this.router = router;
                }
                Daedalus.prototype.ngOnInit = function () { };
                Daedalus = __decorate([
                    core_1.Component({
                        selector: 'daedalus',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n    <header class=\"daedalus-header\">\n    <nav class=\"navbar navbar-static-top navbar-dark bg-primary\">\n        <div class=\"container\">\n            <a href=\"#\" class=\"navbar-brand\">Daedalus</a>\n            <ul class=\"nav navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['LaunchPad']\">Home</a>          \n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['Matches']\">Matches</a>        \n                </li>\n            </ul>\n        </div>\n    </nav>\n    </header>\n    <main>\n        <router-outlet></router-outlet>\n    </main>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/launchpad', name: 'LaunchPad', component: launchPad_component_1.LaunchPadComponent, useAsDefault: true },
                        { path: '/matches', name: 'Matches', component: matches_component_1.MatchesComponent },
                        { path: '/match/:id', name: 'MatchDetail', component: matchDetail_component_1.MatchDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Daedalus);
                return Daedalus;
            }());
            exports_1("Daedalus", Daedalus);
        }
    }
});
//# sourceMappingURL=daedalus.js.map