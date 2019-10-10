import { Component } from '@angular/core';


@Component({
  selector: 'app-textbox',
  template: `<div class="wrap">
    <div class="e-float-input e-input-group" >
        <input type="text" id="textBox1" 
        #testTextBox1 />
        <span class="e-float-line"></span>
    </div>
</div>`,
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent {
  public focusIn(target: HTMLElement): void {
      target.parentElement.classList.add('e-input-focus');
  }

  public focusOut(target: HTMLElement): void {
      target.parentElement.classList.remove('e-input-focus');
  }

  public onMouseDown(target: HTMLElement): void {
      target.classList.add('e-input-btn-ripple');
  }

  public onMouseUp(target: HTMLElement): void {
      let ele: HTMLElement = target;
      setTimeout(
              () => {ele.classList.remove('e-input-btn-ripple'); },
              500);
  }
}