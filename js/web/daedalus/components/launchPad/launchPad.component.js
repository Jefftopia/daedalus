System.register(['angular2/core', 'angular2/common', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, common_1, common_2, router_1;
    var LaunchPadComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
                common_2 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LaunchPadComponent = (function () {
                function LaunchPadComponent(router) {
                    this.router = router;
                }
                LaunchPadComponent.prototype.ngOnInit = function () {
                };
                LaunchPadComponent.prototype.ngOnChanges = function (changes) {
                    console.log(changes);
                };
                LaunchPadComponent.prototype.routeTo = function (project) {
                    this.router.parent.navigate(['Matches']);
                };
                LaunchPadComponent = __decorate([
                    core_1.Component({
                        selector: 'daedalus-launchpad',
                        directives: [common_1.COMMON_DIRECTIVES, common_2.FORM_DIRECTIVES],
                        template: "\n    <div class=\"jumbotron jumbotron daedalus-jumbo\">\n        <div class=\"container\">\n            <h1 class=\"display-5\">Know everything.</h1>\n            <p class=\"lead\">ESports will never be the same. Quality data and analytics for competitive gaming.</p>                        \n        </div>        \n    </div>\n    <nav class=\"navbar navbar-light\">\n        <div class=\"container\">\n        <a class=\"navbar-brand\">Find a Game</a>\n        </div>\n    </nav>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n                <h3 class=\"daedalus-section-title\">Recent</h3>\n                <p>Column of recent game data.</p>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n                <h3 class=\"daedalus-section-title\">Content</h3>\n                <p>\n                Column for mix of editorials and news-worthy matches.\n                Would be interesting if we could highlight public matches\n                that had noteworthy activity, like exceptionally high xp, gold, comebacks, etc.\n                </p>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n                <h3 class=\"daedalus-section-title\">News</h3>\n                <p>\n                Column for minor news, announcements, matches, etc. Tertiary stuff. \n                </p>\n            </div>            \n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], LaunchPadComponent);
                return LaunchPadComponent;
            }());
            exports_1("LaunchPadComponent", LaunchPadComponent);
        }
    }
});
//# sourceMappingURL=launchPad.component.js.map