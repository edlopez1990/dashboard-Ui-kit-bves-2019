import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  template: `
    <ejs-chiplist id="chip">
        <e-chips>
            <e-chip text="Primary" cssClass="e-primary"></e-chip>
            <e-chip text="Success" cssClass="e-success"></e-chip>
            <e-chip text="Info" cssClass="e-info"></e-chip>
            <e-chip text="Warning" cssClass="e-warning"></e-chip>
             <e-chip text="Danger" cssClass="e-danger"></e-chip>
        </e-chips>
    </ejs-chiplist>
  `,
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
