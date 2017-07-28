import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trainers:any[];
  eachtrainer: any;
  constructor(){
    this.trainers = [
      {name: 'Vi', avatar: 'anhVi', birthday: '123', team: 'FE'},
      {name: 'Kien', avatar: 'anhKien', birthday: '', team: 'Ruby'}
    ];
  }

  detail(i: number){
    this.eachtrainer = null;
    setTimeout(() => {
      this.eachtrainer = this.trainers[i];
      console.log(this.trainers[i]);
    },);
  }
}
