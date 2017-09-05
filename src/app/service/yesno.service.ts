import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YesnoService {

  constructor(private http: Http) { }

  findAllYesno() {
    return this.http.get('http://localhost:3000/getYesnoData')
      .map(res => res.json());
  }
}