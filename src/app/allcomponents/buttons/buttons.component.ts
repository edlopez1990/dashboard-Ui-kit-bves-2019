import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template:  `<!-- Primary Button - Used to represent a primary action. -->
              <!-- Link Button - Changes the appearance of the Button like a hyperlink. -->
              <button ejs-button cssClass="e-link">Link</button>`
})

export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

