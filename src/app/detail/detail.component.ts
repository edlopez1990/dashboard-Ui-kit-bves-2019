import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
 
  tabIndex: number;
   constructor() { 
    this.tabIndex = this.onTabClick(1);
   }
 
   onTabClick(index){
    this.tabIndex  = index;
    return index
  }

  ngOnInit() {
  }

}
