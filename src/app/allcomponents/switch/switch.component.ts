import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-switch',
  template: `<!-- To Render Switch with checked state. -->
             <ejs-switch [checked]="true"></ejs-switch>`,
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
