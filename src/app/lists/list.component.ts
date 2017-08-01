import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { listService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'], 
  providers: [listService]
})

export class ListComponent {
  @Input() trainers: any;
  @Output() showEvent: EventEmitter<any> = new EventEmitter<any>();
  i : number;
  
  constructor(private listAll: listService) { }

  ngOnInit(): void { 
    this.trainers = this.listAll.trainers; 
  }

  showDetail(i: number){
    this.showEvent.emit(this.trainers[i]);
  }
}
