import { Component, Input } from '@angular/core';
import { ListsService } from '../list.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ListsService]
})
export class DetailComponent {
  @Input() id: number;
  trainerSelected: any;
  constructor(private list: ListsService) {
  }

  ngDoCheck() {
    this.trainerSelected = this.list.getTrainer(this.id);
  }
}
