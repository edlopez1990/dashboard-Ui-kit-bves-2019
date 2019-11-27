
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {

  constructor() { }
  public data: string[] = ['Snooker', 'Tennis', 'Cricket', 'Football', 'Rugby'];
  ngOnInit() {
  }

}
