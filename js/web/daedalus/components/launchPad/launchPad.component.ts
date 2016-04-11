
import { Component, OnInit, AfterViewInit, OnChanges, SimpleChange, ChangeDetectionStrategy, Injector, Provider } from 'angular2/core';
import { COMMON_DIRECTIVES } from 'angular2/common';
import { FORM_DIRECTIVES, Control } from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from 'angular2/router';

@Component({
    selector: 'daedalus-launchpad',
    directives: [COMMON_DIRECTIVES, FORM_DIRECTIVES],
    template: `
    <div class="jumbotron jumbotron daedalus-jumbo">
        <div class="container">
            <h1 class="display-5">Know everyhting.</h1>
            <p class="lead">ESports will never be the same. Quality data and analytics for competitive gaming.</p>                        
        </div>        
    </div>
    <nav class="navbar navbar-light">
        <div class="container">
        <a class="navbar-brand">Find a Game</a>
            <form class="form-inline pull-right">
                <select class="form-control"
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                </select>
                <button class="btn btn-primary-outline" type="submit" >Button</button>
            </form>                
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <h3 class="daedalus-section-title">Recent</h3>
                <p>Column of recent game data.</p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h3 class="daedalus-section-title">Content</h3>
                <p>
                Column for mix of editorials and news-worthy matches.
                Would be interesting if we could highlight public matches
                that had noteworthy activity, like exceptionally high xp, gold, comebacks, etc.
                </p>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <h3 class="daedalus-section-title">News</h3>
                <p>
                Column for minor news, announcements, matches, etc. Tertiary stuff. 
                </p>
            </div>            
        </div>
    </div>
    `
})
export class LaunchPadComponent implements OnInit, OnChanges {
        
    protected router: Router;    
               
    constructor(
        router: Router
    ) {
        this.router = router;
    }
    
    ngOnInit(): void {
    }
    
    ngOnChanges(changes: {[propertyName: string]: SimpleChange }): void {
        console.log(changes);
    }
        
    public routeTo(project: any): void {
        this.router.parent.navigate(['Matches']);
    }
    
    
}