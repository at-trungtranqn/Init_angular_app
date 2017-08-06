import { Component, Output, EventEmitter } from '@angular/core';
import { ListsService } from '../list.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListsService]
})
export class ListComponent {
  trainers: any[];

  @Output() showdetail: EventEmitter<any> = new EventEmitter<any>();

  constructor(private showSvc: ListsService) {
  }

  ngOnInit() {
    this.trainers = this.showSvc.getTrainers();
  }

  displayDetail(i: number){
    this.showdetail.emit(i);
  }
}
