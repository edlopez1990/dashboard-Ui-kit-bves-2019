import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number',
  template: `
  <div class='wrap'>
    <ejs-numerictextbox format='p2' value='0.5' min='0' max='1' step='0.01' placeholder='Percentage format' floatLabelType= 'Auto'></ejs-numerictextbox>
  </div>
  <div class='wrap'>
    <ejs-numerictextbox format='c2' value='10' placeholder='Currency format' floatLabelType= 'Auto'></ejs-numerictextbox>
  </div>
 `,
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
