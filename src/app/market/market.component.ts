import { Component, OnInit , Input } from '@angular/core';
// import { ChangueColorService } from '../changue-color.service';
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  @Input() tabIndex: number ;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
