import { Component } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})

export class FormComponent {  
  name: string;

  constructor(private syncData:Member){

  }
  addMember() {
      this.syncData.insertMb(this.name); 
  }
}
