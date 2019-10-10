import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  styleUrls: ['./calendar.component.scss'],
  template: `<ejs-datepicker format='yyyy-MM-dd' placeholder='Enter date'
    [value]=dateValue></ejs-datepicker>`
})
export class CalendarComponent implements OnInit {
  public dateValue: Date = new Date("05/17/2017");
  constructor() { }

  ngOnInit() {
  }

}
