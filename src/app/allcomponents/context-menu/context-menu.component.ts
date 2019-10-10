import { Component } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-context-menu',
  template: `<!--target element-->
  <div id="target">Right click / Touch hold to open the ContextMenu</div>

  <!-- To Render ContextMenu. -->
  <ejs-contextmenu id='contextmenu' target='#target' [items]= 'menuItems'></ejs-contextmenu>`,
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent{

  public menuItems: MenuItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];

}
