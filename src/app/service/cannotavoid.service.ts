import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CannotavoidService {

  constructor(private http: Http) { }

  findCannotavoidActor() {
    return this.http.get('http://localhost:3000/getCannotavoidData')
      .map(res => res.json());
  }
}