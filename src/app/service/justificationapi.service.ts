import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JustificationApiService {

  constructor(private http: Http) { }

  gethasAssentDuringCrime() {
    var url = "http://localhost:3000/gethasAssentDuringCrime";
    return this.http.get(url)
       .map(res => res.json());
  }

  gethasAssentGoodMoral() {
    var url = "http://localhost:3000/gethasAssentGoodMoral";
    return this.http.get(url)
       .map(res => res.json());
  }

  gethasDanger() {
    var url = "http://localhost:3000/gethasDanger";
    return this.http.get(url)
       .map(res => res.json());
  }

  gethasDangerImn() {
    var url = "http://localhost:3000/gethasDangerImn";
    return this.http.get(url)
       .map(res => res.json());
  }

  gethasDefending() {
    var url = "http://localhost:3000/gethasDefending";
    return this.http.get(url)
       .map(res => res.json());
  }

  gethasLawfulDef() {
    var url = "http://localhost:3000/gethasLawfulDef";
    return this.http.get(url)
       .map(res => res.json());
  }

  gethasPureAssent() {
    var url = "http://localhost:3000/gethasPureAssent";
    return this.http.get(url)
       .map(res => res.json());
  }
}