import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-gridtoolbar',
  template: `<ejs-grid #grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' (toolbarClick)='clickHandler($event)' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class GridtoolbarComponent implements OnInit {

  public data: Object[];
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[] | Object;

  @ViewChild('grid')
  public grid: GridtoolbarComponent;

  ngOnInit(): void {
      this.data = data;
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
      this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-expand', id: 'Click' }];
  }

  clickHandler(args: ClickEventArgs): void {
      if (args.item.id === 'Click') {
          alert("Custom Toolbar Click...");
      }
  }
}
