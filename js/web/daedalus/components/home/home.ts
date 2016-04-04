import { Component, OnInit } from 'angular2/core';
import { COMMON_DIRECTIVES } from 'angular2/common';

@Component({
    selector: 'home'
    templateUrl: './components/home/home.html',
    directives: [COMMON_DIRECTIVES]
})
export class Home {
    
    protected router: Router;
    
    constructor() {
    }
    
    ngOnInit(): void {
        
    }
    
}
