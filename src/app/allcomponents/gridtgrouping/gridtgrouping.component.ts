import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { datos } from './datasourcegruping';
import { ToolbarItems, GroupSettingsModel } from '@syncfusion/ej2-angular-grids';
@Component({
  selector: 'app-gridtgrouping',
  template: `<ejs-grid #grid [dataSource]='data' height='200px' [allowGrouping]='true' [groupSettings]='groupOptions' [toolbar]='toolbar' >
  <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
      <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
      <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
  </e-columns>
  </ejs-grid>`
})
export class GridtgroupingComponent implements OnInit {

  public data: Object[];
  public toolbar: ToolbarItems[];
  public groupOptions: GroupSettingsModel;

  @ViewChild('grid')
  public grid: GridtgroupingComponent;

  ngOnInit(): void {
      this.data = datos;
     
      this.groupOptions = { columns: ['CustomerID'] };
  }
}
