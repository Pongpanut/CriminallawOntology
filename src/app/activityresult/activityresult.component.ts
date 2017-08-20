import { Component, Pipe, PipeTransform } from '@angular/core';


@Pipe({
   name: 'Activityresult'
})

@Component({
  selector: 'app-activityresult',
  templateUrl: './activityresult.component.html',
  styleUrls: ['./activityresult.component.css']
})

export class ActivityresultComponent implements PipeTransform {

   transform(content) {
       return `<b>ActivityresultComponent</b>`;
   }

  constructor() { 

  }

  ngOnInit() {
  }

}
