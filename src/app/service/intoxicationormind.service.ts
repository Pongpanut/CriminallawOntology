import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IntoxicationormindService {

  constructor(private http: Http) { }

  findIntoxicationormind() {
    return this.http.get('http://localhost:3000/getIntoxicationormindData')
      .map(res => res.json());
  }
}