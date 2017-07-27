import { Component, ViewChild  } from '@angular/core';
import {FormComponent } from './form/form.component';
import {ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  
})
export class AppComponent {
  @ViewChild(ListComponent) listMember: any;
  @ViewChild(FormComponent) usernames: any;

  ngOnInit(){
    this.usernames.addName = () =>{
      this.listMember.usernames.push(this.usernames.name);
    }
  }
}
