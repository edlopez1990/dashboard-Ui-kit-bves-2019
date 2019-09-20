import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-range',
  template: `
        <!--Sets the value, min and max -->
        <ejs-calendar [value]='dateValue' [min]='minDate' [max]='maxDate'></ejs-calendar>
        `,
  styleUrls: ['./calendar-range.component.scss']
})
export class CalendarRangeComponent implements OnInit {
  public today: Date = new Date();
  public currentYear: number = this.today.getFullYear();
  public currentMonth: number = this.today.getMonth();
  public currentDay: number = this.today.getDate();
  public dateValue: Object = new Date(new Date().setDate(14));
  public minDate: Object = new Date(this.currentYear, this.currentMonth, 7);
  public maxDate: Object =  new Date(this.currentYear, this.currentMonth, 27);
  constructor() { }

  ngOnInit() {
  }

}
