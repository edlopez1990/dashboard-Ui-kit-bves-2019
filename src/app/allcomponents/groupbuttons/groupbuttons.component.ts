import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-groupbuttons',
  template: `<!-- To render ButtonGroup. -->
             <div class='e-btn-group'>
                <button ejs-button>Venta</button>
                <button ejs-button class="active">Compra</button>
              </div>`,
  styleUrls: ['./groupbuttons.component.scss']
})
export class GroupbuttonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
