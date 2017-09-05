import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YesnoDangerService {

  constructor(private http: Http) { }

  findAllYesnoDanger() {
    return this.http.get('http://localhost:3000/getYesnoDangerData')
      .map(res => res.json());
  }
}