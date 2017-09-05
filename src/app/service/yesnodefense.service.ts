import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YesnoDefenseService {

  constructor(private http: Http) { }

  findAllYesnoDefense() {
    return this.http.get('http://localhost:3000/getYesnoDefenseData')
      .map(res => res.json());
  }
}