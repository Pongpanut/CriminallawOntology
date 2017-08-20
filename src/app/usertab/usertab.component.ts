import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usertab',
  templateUrl: './usertab.component.html',
  styleUrls: ['./usertab.component.css']
})
export class UsertabComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
