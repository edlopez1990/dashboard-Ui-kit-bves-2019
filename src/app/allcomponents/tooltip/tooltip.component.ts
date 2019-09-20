import { Component, OnInit ,ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
    <div class="tooltipContent">
      <ejs-tooltip #tooltip id="tooltip" position='BottomCenter'>
        <ng-template #content>
          <div>
            Through templates,<b><span style="color:#e3165b">tooltip content</span></b> can be loaded with <u><i> inline HTML, images, iframe, videos, maps </i></u>. A title can be added to the content
          </div>
        </ng-template>
        <input ejs-button type="button" class="text" id="Title" value="HTML(With Title)" />
      </ejs-tooltip>
    </div>
  `,
  styleUrls: ['./tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TooltipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
