import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YesnoMoralService {

  constructor(private http: Http) { }

  findAllYesnoMoral() {
    return this.http.get('http://localhost:3000/getYesnoMoralData')
      .map(res => res.json());
  }
}