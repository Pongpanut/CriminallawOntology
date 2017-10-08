import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class OntologyService {

  constructor(private http: Http) { }

  findResponse(param: String) {
    // return this.http.get('http://localhost:9999/home/criminalOnt?offender=petch&victim=missc&victimdetail=group_morethan3&adddetail=Noadd&crimesucceed=harm&negligence=Negli_intention&intenact=IntentionAct&nocriminalimpu=NoCriminalImpunity_ins&nojust=No_just&causation=seriously_injured')
    //   .map(res => res.text());
    var url = "http://localhost:9999/home/criminalOnt?"+param;
    return this.http.get(url)
       .map(res => res.text());
  }
}