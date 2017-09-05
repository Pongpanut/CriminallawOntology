import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RelizedService {

  constructor(private http: Http) { }

  findAllRelized() {
    return this.http.get('http://localhost:3000/getRelizedData')
      .map(res => res.json());
  }
}