import { Component, OnInit } from '@angular/core';
import { UsertabComponent} from '../usertab/usertab.component'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  entryComponents: [UsertabComponent]
})

export class DropdownComponent implements OnInit {
  currencyCodes: {key: number, value: string}[] = [];
  userCount: {id: number}[] = [];
  selectedVal = this.currencyCodes[1];

  constructor() {
  }
  
  ngOnInit() {
    this.currencyCodes.push({key: 0, value: "จำนวนผู้กระทำผิด"});
    this.currencyCodes.push({key: 1, value: "1 คน"});
    this.currencyCodes.push({key: 2, value: "2 คน"});
    this.currencyCodes.push({key: 3, value: "3 คน"});
    this.currencyCodes.push({key: 4, value: "4 คน"});
    this.currencyCodes.push({key: 5, value: "5 คน"});
  }

  onChange(event) {
    this.userCount = [];
    for (var _i = 0; _i < event; _i++) {
      this.userCount.push({id :_i+1});
    }
  }

}
