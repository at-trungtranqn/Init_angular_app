import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'detail-member',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [AppService]
})
export class DetailComponent {

  @Input() id: number;

  selectedTrainer: any;

  constructor(private listTrainer: AppService) {
  }

  ngOnChanges() {
    this.listTrainer.getTrainer().subscribe(
      data => {
        let trainers = data.trainers
        for(let trainer of trainers){
          if(trainer.id === this.id){
            this.selectedTrainer = trainer;
            break;
          }
        }
      },
      err => {
        console.log('Can not get data', err.status, err.url)
      },
      () => console.log('Completed!')
    );
  }
}
