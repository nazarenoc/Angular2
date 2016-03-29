import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {UserService} from './service'

@Component({
    selector: 'my-app',
    providers: [UserService],
    template: `<ul>
                    <li *ngFor="#u of users">
                        {{u.id}} - {{u.name}}
                    </li>     
               </ul>`    
})

export class AppComponent {
    users:Array<any>; 
    constructor(userService:UserService) {        
        userService.getUsers().subscribe(users => this.users = users);
    }
}