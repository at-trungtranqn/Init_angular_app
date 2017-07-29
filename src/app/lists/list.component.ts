import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  trainers: any[];
  selectTrainer: any;
  constructor() {
    this.trainers = [
      {
        name: 'Vi',
        avatar: 'http://forum.ragezone.com/customavatars/thumbs/avatar818533_59.gif',
        birthday: '01/01/1989', team: 'FE'
      },
      {
        name: 'Kien',
        avatar: 'kien.jpg',
        birthday: '01/01/1991',
        team: 'Ruby'
      },
      {
        name: 'Vien',
        avatar: 'https://forum.xda-developers.com/customavatars/thumbs/avatar4998060_1.gif',
        birthday: '',
        team: 'PHP'
      }
    ];
  }
  showDetail( i : number ){
    this.selectTrainer = null;
    setTimeout(() => {
      this.selectTrainer = this.trainers[i];
    });
  }
}
