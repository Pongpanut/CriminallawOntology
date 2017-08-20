import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ActorService {

  constructor(private http: Http) { }

  findAllActor() {
    return this.http.get('http://localhost:3000/getActorData')
      .map(res => res.json());
  }
}