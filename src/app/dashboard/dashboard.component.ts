import { Component, AfterViewInit, OnInit } from "@angular/core";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
// export class DashboardComponent implements OnInit {
//   constructor() {}

//   ngOnInit() {}
// }
export class DashboardComponent {
  
  text = "&nbsp &nbsp &nbsp Bolsa de Valores de El Salvador®. Todos los derechos reservado";
  tabIndex = 0 ;
  onTabClick(index){
        this.tabIndex = index;
        if (index === 2) {
          this.toggleMicroTwo();
        }
   }
   title = 'micro-front';

  toShow: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {
  }

  private loadScript(url: string): void {
    

    //cargamos el escript que nos ayudara a mostrar a nuestros componentes 
    if (document.querySelectorAll(`script[src='${url}']`).length === 0) {
      const script = document.createElement('script');
      script.onload = function () {
          // do stuff with the script
      };
      script.src = url;
      document.head.appendChild(script);
    }
  }

   public toggleMicroOne() {

    // Componente compilado como un microcomponete de Login
    // if (!this.toShow) {
      console.log('alerta');
      this.loadScript('elements/micro-one.js');
      this.toShow = this.sanitizer.bypassSecurityTrustHtml(`<micro-one>
      <div class="loader-05"></div>
      </micro-one>`);
    // } else {
    //   this.toShow = '';
    // }
  }

  public toggleMicroTwo() {
    // Componente compilado como un microcomponete de Error
    // if (!this.toShow) {
      console.log('alerta');
      this.loadScript('elements/micro-two.js');
      this.toShow = this.sanitizer.bypassSecurityTrustHtml(`<micro-two>
      <div class="loader-05"></div>
      </micro-two>`);
    // } else {
    //   this.toShow = '';
    // }
  }
}

