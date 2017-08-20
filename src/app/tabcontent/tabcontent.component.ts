import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { ActorService } from '../service/actor.service';

@Component({
  selector: 'app-tabcontent',
  templateUrl: './tabcontent.component.html',
  styleUrls: ['./tabcontent.component.css']
})

export class TabContentComponent implements OnInit {
  actordata: {value: string}[] = [];
  flowchart: string[] = [];
  instancename:  string;
  defaultValue = this.actordata[1];
  actorList: any = [];

  constructor(private actorService : ActorService) 
  { 

  }

 
  ngOnInit() {
    this.instancename = 'Actor';
      this.actorService.findAllActor().subscribe(response => {
      this.actorList = response;
      for (let actor of this.actorList) {
        this.actordata.push({value: actor.name});
      }
    });
  }

  onChange(event) {
  }

  myFunc(value){
    this.flowchart.push(this.instancename +" ของผู้เกี่ยวข้องนี้คือ "+value)
  }
}
