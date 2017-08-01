import { Injectable } from '@angular/core'

@Injectable()
export class TrainersService {
  trainers:any[];
  constructor(){
    this.trainers = [
    { name: 'anh Vi', avatar: 'https://www.shareicon.net/data/128x128/2015/12/14/207809_face_300x300.png', birthday: '123', team: 'FE'},
    { name: 'anh Kien', avatar: 'https://www.shareicon.net/data/128x128/2015/12/14/207817_face_300x300.png', birthday: '', team: 'Ruby'},
    { name: 'anh', avatar: '', birthday: '', team: 'Ruby'}
    ];
  }
  getTrainers(): any[] {
    return this.trainers;
  }

  getTrainer(i: number): any {
    return this.trainers[i];
  }
}