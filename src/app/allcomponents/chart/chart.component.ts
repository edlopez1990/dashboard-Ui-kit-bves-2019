import { Component, OnInit } from '@angular/core';
import { areaData } from './datasource';

@Component({
  selector: 'app-chart',
  template:
  `<ejs-chart  id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [palettes]='palette' height="220px" width="450px">
  <e-series-collection>
      <e-series [dataSource]='chartData' type='Area' xName='x' yName='y' name='Product A' fill='#01973d' opacity=0.6>
      
      </e-series>
  </e-series-collection>
</ejs-chart>`
})
export class ChartComponent implements OnInit {

  public primaryXAxis: Object;
  public chartData: Object[];
  public title: string;
  public primaryYAxis: Object;
  public palette: string[];

  ngOnInit(): void {
      this.chartData = areaData;
      this.primaryXAxis = {
         title: '',
         minimum: 1900, maximum: 2000, interval: 10,
         edgeLabelPlacement: 'Shift'
      };
      this.primaryYAxis = {
         minimum: 2, maximum: 5, interval: 0.5,
         title: ''
      };
      this.title = '';
      this.palette = ["#E94649", "#F6B53F", "#6FAAB0", "#C4C24A"];
  }

}
