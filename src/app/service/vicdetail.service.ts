import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VicDetailService {

  constructor(private http: Http) { }

  findAllVicDetail() {
    return this.http.get('http://localhost:3000/getVicDetailData')
      .map(res => res.json());
  }
}