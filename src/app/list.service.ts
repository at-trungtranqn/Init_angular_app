import { Injectable } from '@angular/core'

@Injectable()
export class ListsService {
  trainers:any[];
  constructor(){
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
  getTrainers(): any[] {
    return this.trainers;
  }

  getTrainer(i: number): any {
    return this.trainers[i];
  }
}