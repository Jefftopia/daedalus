System.register(['core-js/client/shim', 'angular2/bundles/angular2-polyfills', 'angular2/bundles/http', 'angular2/bundles/router', 'angular2/platform/browser', 'angular2/router', './daedalus', './services/dotaMatches.service', './services/dotaMatchDetail.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, daedalus_1, dotaMatches_service_1, dotaMatchDetail_service_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (daedalus_1_1) {
                daedalus_1 = daedalus_1_1;
            },
            function (dotaMatches_service_1_1) {
                dotaMatches_service_1 = dotaMatches_service_1_1;
            },
            function (dotaMatchDetail_service_1_1) {
                dotaMatchDetail_service_1 = dotaMatchDetail_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(daedalus_1.Daedalus, [
                router_1.ROUTER_PROVIDERS,
                dotaMatches_service_1.DotaMatchesService,
                dotaMatchDetail_service_1.DotaMatchDetailService
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map