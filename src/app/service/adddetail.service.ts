import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AddDetailService {

  constructor(private http: Http) { }

  findAllAddDetail() {
    return this.http.get('http://localhost:3000/getAddDetailData')
      .map(res => res.json());
  }
}