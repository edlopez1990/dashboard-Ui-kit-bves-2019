import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  template:
    `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [titleStyle]='titleStyle' width='100%' height='220px'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='month' yName='sales' width=2 name='China' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`,
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  public primaryXAxis: Object;
  public chartData: Object[];
  public title: string;
  public marker: Object;
  public titleStyle: Object;
  ngOnInit(): void {
      this.chartData =  [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
      this.primaryXAxis = {
          valueType: 'Category',
      };
      this.marker = { visible: true, width: 10, height: 10 };
      this.title = '';
      this.titleStyle = {
         size:'18px', color:'Red', textAlignment: 'Far', textOverflow: 'Wrap'
      }
  }


}
