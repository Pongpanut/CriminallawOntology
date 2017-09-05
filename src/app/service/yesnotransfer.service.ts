import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YesnoTransferService {

  constructor(private http: Http) { }

  findAllYesnoTransfer() {
    return this.http.get('http://localhost:3000/getYesnoTransferData')
      .map(res => res.json());
  }
}