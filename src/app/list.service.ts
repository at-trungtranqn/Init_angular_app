import { Injectable } from '@angular/core';

@Injectable()
export class listService {

  trainers : any;
  
  constructor() {
    this.trainers = [
      {
        name: 'Vi',
        avatar: 'http://forum.ragezone.com/customavatars/thumbs/avatar818533_59.gif',
        birthday: '01/01/1989',
        team: 'FE'
      },
      {
        name: 'Kien',
        avatar: '',
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

  getDetail(i: number){
    return this.trainers[i];
  }
} 