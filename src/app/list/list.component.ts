import { Component } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})

export class ListComponent {  
  listname: string[] ; 
  constructor(private data: Member){
      this.listname = this.data.listname;
  }
}
