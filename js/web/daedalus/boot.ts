/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import 'core-js/client/shim';
import 'angular2/bundles/angular2-polyfills';
import 'angular2/bundles/http';
import 'angular2/bundles/router';
import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Daedalus } from './daedalus';
import { DotaRestDao } from './services/abstractDota.service';
import { DotaMatchesService } from './services/dotaMatches.service';
import { DotaMatchDetailService } from './services/dotaMatchDetail.service';

bootstrap(Daedalus, [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        DotaRestDao,
        DotaMatchesService,
        DotaMatchDetailService
    ]);