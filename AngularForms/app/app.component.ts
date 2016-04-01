import {Component} from 'angular2/core';
import {Mock} from './mock'
import {Person} from './model'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent { 
    user:Person;
    
    submitted: boolean;
    
    constructor(_mock:Mock) {
        this.user = _mock.mike;
    }
    
    onSubmit(f) {
        this.submitted = true;
        console.log("sending..." + JSON.stringify(this.user));
    }
} 