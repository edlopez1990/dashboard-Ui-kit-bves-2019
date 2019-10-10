import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   tabIndex = 1;
  onTabClick(index){
        this.tabIndex = index;
   }

  constructor() { }

  ngOnInit() {
  }

}
