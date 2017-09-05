import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VictimService {

  constructor(private http: Http) { }

  findAllVictim() {
    return this.http.get('http://localhost:3000/getVictimData')
      .map(res => res.json());
  }
}