import { Component, Input } from '@angular/core';
import { TrainersService } from '../hero.service'

@Component({
  selector: 'detail-member',
  templateUrl: './detail.component.html',
  styleUrls: ['../app.component.css'],
  providers: [TrainersService]
})
export class DetailComponent {
  @Input() id: number;
  eachtrainer: any;
  constructor(private list: TrainersService) {
  }

  ngDoCheck() {
    this.eachtrainer = this.list.getTrainer(this.id);
  }
}
