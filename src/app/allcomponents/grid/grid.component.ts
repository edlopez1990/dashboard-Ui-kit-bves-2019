import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';



@Component({
  selector: 'app-grid',
  template: `<ejs-grid [dataSource]='data' [allowPaging]="true" [allowSorting]='true' [pageSettings]='pageSettings'>
              <e-columns>
                  <e-column field='OrderID'    headerText='Order ID'    textAlign='Center' width=90></e-column>
                  <e-column field='CustomerID' headerText='Customer ID' textAlign='Center'  width=90></e-column>
                  <e-column field='Freight'    headerText='Freight'     textAlign='Center' format='C2' width=90></e-column>
                  <e-column field='OrderDate'  headerText='Order Date'  textAlign='Center' format='yMd' width=90></e-column>
              </e-columns>
              </ejs-grid>`
})

export class GridComponent implements OnInit {

  public data: object[];
  public pageSettings: PageSettingsModel;

  ngOnInit(): void {
      this.data = data;
      this.pageSettings = { pageSize: 6 };
  }
}
