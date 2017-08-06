import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  trainers: Array<string> = [];

  constructor(private http: Http){
  }

  getTrainers() {
    return this.http.get('./data-json/data.json')
      .map(res => res.json());
  }

  getTrainer() {
    return this.http.get('./data-json/data.json')
      .map(res => res.json());
  }
}
