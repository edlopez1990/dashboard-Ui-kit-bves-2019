import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownlist',
  template: `<label>Input Label</label><br><ejs-dropdownlist id='ddlelement' [dataSource]='data' placeholder = 'Select '></ejs-dropdownlist>`,
  styleUrls: ['./dropdownlist.component.scss']
})
export class DropdownlistComponent implements OnInit {

  constructor() {
  }
  // defined the array of data
  public data: string[] = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby'];
  ngOnInit() {
  }

}

