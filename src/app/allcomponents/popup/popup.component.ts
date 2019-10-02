import { Component,ViewChild, OnInit ,ElementRef} from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-popup',
  template: `<button class="e-control e-btn" style="position: absolute;" id="targetButton" (click)="onOpenDialog($event)">Open Dialog</button>
  <div #container class='root-container'>
    <ejs-dialog [visible]='visible' id='dialog' #ejDialog [animationSettings]='animationSettings' [closeOnEscape]='closeOnEscape' content='Are you sure you want to permanently delete all of these items?' header='Delete Multiple Items' [target]='targetElement'
    width='486px' [showCloseIcon]='showCloseIcon' [buttons]='buttons' style="    margin: auto;
    top: 0;
    bottom: 0;
    max-height: 200px;">
    </ejs-dialog> </div> `,
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @ViewChild('ejDialog') ejDialog: DialogComponent;
  // Create element reference for dialog target element.
  @ViewChild('container', { read: ElementRef }) container: ElementRef;
  // The Dialog shows within the target element.
  public targetElement: HTMLElement;

  //To get all element of the dialog component after component get initialized.
  ngOnInit() {
    this.initilaizeTarget();
  }
  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
          if(args.target.tagName === 'BODY') {
              this.ejDialog.hide();
          }
      }
  }

  // Initialize the Dialog component's target element.
  initilaizeTarget: EmitType<object> = () => {
    this.targetElement = document.body;
  }
  public closeOnEscape: boolean = true;
  //Animation options
  public animationSettings: Object = { effect: 'Zoom', duration: 400, delay: 0 };

  public showCloseIcon: boolean = true;
  public visible: Boolean = false;
  // Hide the Dialog when click the footer button.
  public hideDialog: EmitType<object> = () => {
      this.ejDialog.hide();
  }
  // Enables the footer buttons
  public buttons: Object = [
      {
          'click': this.hideDialog.bind(this),
          // Accessing button component properties by buttonModel property
            buttonModel:{
            content:'Yes',
            //Enables the primary button
            isPrimary: true
          }
      },
      {
          'click': this.hideDialog.bind(this),
          // Accessing button component properties by buttonModel property
            buttonModel:{
            content:'No',
          }
      }
  ];
  // Sample level code to handle the button click action
  public onOpenDialog = function(event: any): void {
      // Call the show method to open the Dialog
      this.ejDialog.show();
  }

}
