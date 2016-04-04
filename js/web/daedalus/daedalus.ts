import { Component, OnInit, AfterViewInit } from 'angular2/core';
import { COMMON_DIRECTIVES } from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from 'angular2/router';

@Component({
    selector: 'daedalus'
    templateUrl: './daedalus.html',
    providers: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/home',                   name: 'Home',         component: MatchesView },
    { path: '/matches',                name: 'Matches',      component: MatchesView },
    { path: '/match-details/:matchId', name: 'MatchDetails', component: MatchDetailsView }
])
export class Daedalus {
    
    protected router: Router;
    
    constructor(router: Router) {
        this.router = router;
    }
    
    ngOnInit(): void {
        
    }
    
}
/*
@RouteConfig([

  { // Crisis Center child route
    path: '/crisis-center/...',
    name: 'CrisisCenter',
    component: CrisisCenterComponent,
    useAsDefault: true
  },
  {path: '/heroes',   name: 'Heroes',     component: HeroListComponent},
  {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
  {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]}
])
*/