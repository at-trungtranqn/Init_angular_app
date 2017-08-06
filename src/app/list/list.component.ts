import { Component, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [AppService]
})
export class ListComponent {

  trainers: Array<any> = [];

  @Output() showdetail: EventEmitter<any> = new EventEmitter<any>();

  constructor(private listTrainer: AppService) {
    this.listTrainer.getTrainers().subscribe(
      data => {
        this.trainers = data.trainers || [];
      },
      err => {
        console.log('Can not get data', err.status, err.url)
      },
      () => console.log('Completed!')
    );
  }

  ngOnInit() {
    
  }

  getDetail(id: number){
    this.showdetail.emit(id);
  }
}
