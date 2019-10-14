import { Component, OnInit,   } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
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
