import { Component, OnInit,  } from 'angular2/core';
import { COMMON_DIRECTIVES } from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from 'angular2/router';

@Component({
    selector: 'daedalus',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <header class="daedalus-header">
    <nav class="navbar navbar-static-top navbar-dark bg-primary">
        <div class="container">
            <a href="#" class="navbar-brand">Daedalus</a>
            <ul class="nav navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" [routerLink]="['LaunchPad']">LaunchPad</a>          
                    <a class="nav-link" [routerLink]="['Matches']">Matches</a>        
                </li>
            </ul>
        </div>
    </nav>
    </header>
    <main>
        <router-outlet></router-outlet>
    </main>
    `
})
@RouteConfig([
    { path: '/launchpad', name: 'LaunchPad', component: LaunchPadComponent, useAsDefault: true },
    { path: '/matches', name: 'Matches', component: MatchesComponent  },
    { path:'/match/:name', name: 'Match', component: MatchDetailComponent }
])
export class Daedalus implements OnInit {
        
    protected router: Router;    
        
    constructor(router: Router) {
        this.router = router;
    }
    
    ngOnInit(): void { }

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