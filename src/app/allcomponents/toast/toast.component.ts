import { Component, OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-toast',
  template: `
       <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
        <ejs-toast #element (created)="onCreate($event)" [position]='position'>
              <ng-template #title>
                  <div>Matt sent you a friend request</div>
              </ng-template>
              <ng-template #content>
                  <div>Hey, wanna dress up as wizards and ride our hoverboards?</div>
              </ng-template>
    </ejs-toast>`,
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent  {
  @ViewChild('element') element;
  public position = { X: 'Right' };

  onCreate() {
    this.element.show();
  }

  btnClick() {
    this.element.show();
  }

}
