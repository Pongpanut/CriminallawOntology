import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YesnoCriminalImpunityService {

  constructor(private http: Http) { }

  findAllYesnoControl() {
    return this.http.get('http://localhost:3000/getYesnoControlData')
      .map(res => res.json());
  }

  findAllYesnoNecessity() {
    return this.http.get('http://localhost:3000/getYesnoNecessityData')
      .map(res => res.json());
  }

  findAllYesnoOwn() {
    return this.http.get('http://localhost:3000/getYesnoOwnData')
      .map(res => res.json());
  }

  findAllYesnoImmi() {
    return this.http.get('http://localhost:3000/getYesnoImmiData')
      .map(res => res.json());
  }

  findAllYesnoReason() {
    return this.http.get('http://localhost:3000/getYesnoReasonData')
      .map(res => res.json());
  }

  findAllYesnoSpouse() {
    return this.http.get('http://localhost:3000/getYesnoSpouseData')
      .map(res => res.json());
  }


  findAllYesno334() {
    return this.http.get('http://localhost:3000/getYesno334Data')
      .map(res => res.json());
  }

  findAllYesnoUnlawful() {
    return this.http.get('http://localhost:3000/getYesnoUnlawfulData')
      .map(res => res.json());
  }
}