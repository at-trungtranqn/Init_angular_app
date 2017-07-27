import {Component} from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html'
})

export class ListComponent {
	usernames: Array<string>;
  	constructor(){
    	this.usernames = [];
  	}
}
