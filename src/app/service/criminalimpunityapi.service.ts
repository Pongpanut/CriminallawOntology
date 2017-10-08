import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CriminalImpunityApiService {

  constructor(private http: Http) { }
  getCrihasAgeRes() {
    var url = "http://localhost:3000/getCrihasAgeRes";
    return this.http.get(url)
       .map(res => res.json());
  }

  getCrihasSitRes() {
    var url = "http://localhost:3000/getCrihasSitRes";
    return this.http.get(url)
       .map(res => res.json());
  }

  getCrihasMindRes() {
    var url = "http://localhost:3000/getCrihasMindRes";
    return this.http.get(url)
       .map(res => res.json());
  }

  getCrihasMentalInfirmlyRes() {
    var url = "http://localhost:3000/getCrihasMentalInfirmlyRes";
    return this.http.get(url)
       .map(res => res.json());
  }

  getCrihasDrunkRes() {
    var url = "http://localhost:3000/getCrihasDrunkRes";
    return this.http.get(url)
       .map(res => res.json());
  }

  getCrihasCauseDrunkfRes() {
    var url = "http://localhost:3000/getCrihasCauseDrunkfRes";
    return this.http.get(url)
       .map(res => res.json());
  }

  getCrihasActByOfficerComRes() {
    var url = "http://localhost:3000/getCrihasActByOfficerComRes";
    return this.http.get(url)
       .map(res => res.json());
  }
  getCrihasIlligalCommandRes() {
    var url = "http://localhost:3000/getCrihasIlligalCommandRes";
    return this.http.get(url)
       .map(res => res.json());
  }
  getCrihasDontKnowIlligalRes() {
    var url = "http://localhost:3000/getCrihasDontKnowIlligalRes";
    return this.http.get(url)
       .map(res => res.json());
  }

  getCrihasNeedActionRes() {
    var url = "http://localhost:3000/getCrihasNeedActionRes";
    return this.http.get(url)
       .map(res => res.json());
  }

  getCrihasBeForcesRes() {
    var url = "http://localhost:3000/getCrihasBeForcesRes";
    return this.http.get(url)
       .map(res => res.json());
  }

  getCrihasCannotAvoidRes() {
    var url = "http://localhost:3000/getCrihasCannotAvoidRes";
    return this.http.get(url)
       .map(res => res.json());
  }

  getCrihasDontNeedRes() {
    var url = "http://localhost:3000/getCrihasDontNeedRes";
    return this.http.get(url)
       .map(res => res.json());
  }

  getCrihasLimitRes() {
    var url = "http://localhost:3000/getCrihasLimitRes";
    return this.http.get(url)
       .map(res => res.json());
  }

  getCrihasProtecetdRes() {
    var url = "http://localhost:3000/getCrihasProtecetdRes";
    return this.http.get(url)
       .map(res => res.json());
  }
}