import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CausationService {

  constructor(private http: Http) { }

  findCausation() {
    return this.http.get('http://localhost:3000/getCausationData')
      .map(res => res.json());
  }

  findCausationVic1() {
    return this.http.get('http://localhost:3000/getCausationVic1Data')
      .map(res => res.json());
  }

  findCausationVic2() {
    return this.http.get('http://localhost:3000/getCausationVic2Data')
      .map(res => res.json());
  }

  findCausationVic3() {
    return this.http.get('http://localhost:3000/getCausationVic3Data')
      .map(res => res.json());
  }
}