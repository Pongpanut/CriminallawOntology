import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YesnoDirectService{

  constructor(private http: Http) { }

  findAllYesnoDirect() {
    return this.http.get('http://localhost:3000/getYesnoDirectData')
      .map(res => res.json());
  }
}