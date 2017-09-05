import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YesnoAwarenessService {

  constructor(private http: Http) { }

  findAllYesnoAwareness() {
    return this.http.get('http://localhost:3000/getYesnoAwarenessData')
      .map(res => res.json());
  }
}