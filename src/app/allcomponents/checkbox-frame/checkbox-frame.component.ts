import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-frame',
  template: `<ul>
                    <li><ejs-checkbox label="Buy Groceries" cssClass="e-custom" [checked]="true"></ejs-checkbox></li>

                    <li><ejs-checkbox label="Pay Rent" cssClass="e-custom"></ejs-checkbox></li>

                    <li><ejs-checkbox label="Make Dinner" cssClass="e-custom"></ejs-checkbox></li>

                    <li><ejs-checkbox label="Finish To-do List Article" cssClass="e-custom"></ejs-checkbox></li>
                </ul>`,
  styleUrls: ['./checkbox-frame.component.scss']
})
export class CheckboxFrameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
