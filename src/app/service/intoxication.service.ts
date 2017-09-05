import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IntoxicationService {

  constructor(private http: Http) { }

  findIntoxication() {
    return this.http.get('http://localhost:3000/getIntoxicationData')
      .map(res => res.json());
  }
}