import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <div tabindex="0" class="e-card" id="basic">
      <div class="e-card-header">
          <div class="e-card-header-caption">
              <div class="e-card-title">Title</div>
          </div>
      </div>
      <div class="e-card-content">
      Here you can put the information that you want yo say
      </div>
  </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @ViewChild('element') element;

  constructor() { }

  ngOnInit() {
  }

}
