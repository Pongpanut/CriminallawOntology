import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OffenderageService {

  constructor(private http: Http) { }

  findOffenderage() {
    return this.http.get('http://localhost:3000/getOffenderageData')
      .map(res => res.json());
  }
}