import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ActionService {

  constructor(private http: Http) { }

  findAllAction() {
    return this.http.get('http://localhost:3000/getActionData')
      .map(res => res.json());
  }

  findAllActionCat1() {
    return this.http.get('http://localhost:3000/getActionDataCat1')
      .map(res => res.json());
  }

  findAllActionCat2() {
    return this.http.get('http://localhost:3000/getActionDataCat2')
      .map(res => res.json());
  }

  findAllActionCat3() {
    return this.http.get('http://localhost:3000/getActionDataCat3')
      .map(res => res.json());
  }
}