import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IntentionApiService {

  constructor(private http: Http) { }

  getHas_rea_cau() {
    var url = "http://localhost:3000/getHasreacauRes";
    return this.http.get(url)
       .map(res => res.json());
  }

  getHas_rea_act() {
    var url = "http://localhost:3000/getHasreaactModel";
    return this.http.get(url)
       .map(res => res.json());
  }

  getHas_intent_other() {
    var url = "http://localhost:3000/getHasintentotherModel";
    return this.http.get(url)
       .map(res => res.json());
  }

  getHas_int_act() {
    var url = "http://localhost:3000/getHasintactModel";
    return this.http.get(url)
       .map(res => res.json());
  }

  getHas_act_heedless() {
    var url = "http://localhost:3000/getHasactheedlessModel";
    return this.http.get(url)
       .map(res => res.json());
  }

  getHas_fore_effectModel() {
    var url = "http://localhost:3000/getHasforeeffectModel";
    return this.http.get(url)
       .map(res => res.json());
  }

  getHas_act_heedless_eng() {
    var url = "http://localhost:3000/getHasactheedlessengModel";
    return this.http.get(url)
       .map(res => res.json());
  }
}