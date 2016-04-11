import 'core-js/client/shim';
import 'angular2/bundles/angular2-polyfills';
import 'angular2/bundles/http';
import 'angular2/bundles/router';
import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { Daedalus } from './daedalus';
import { DotaMatchesService } from './services/dotaMatches.service';
import { DotaMatchDetailService } from './services/dotaMatchDetail.service';

bootstrap(Daedalus, [
    ROUTER_PROVIDERS,
    DotaMatchesService,
    DotaMatchDetailService  
    ]);