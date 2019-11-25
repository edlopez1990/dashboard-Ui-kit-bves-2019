import { Component, AfterViewInit, OnInit } from "@angular/core";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";
import * as $ from "jquery";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
// export class DashboardComponent implements OnInit {
//   constructor() {}

//   ngOnInit() {}
// }
export class DashboardComponent implements OnInit {
  public ngOnInit() {
  

    $(document).ready(function() {
      $("#menu-content li a").on('click', function(event){
    
        $('li[data-toggle="collapse"]').each(function () {
            if ($(this).next('ul').length == 0) {
                $(this).removeAttr('data-toggle').removeAttr('data-target').removeClass('collapsed');
                $(this).find('span.arrow').remove();
            }
        });
        $('ul#menu-content > ul').on('show.bs.collapse', function (e, obj) {
            $("ul#menu-content > ul").not(this).removeClass("in");
            var currentHead = $(this).prev("li");
            $("ul#menu-content > li").not(currentHead).removeClass("active");
            $(currentHead).addClass("active");
        })
      });
    });


  }
  text =
    "&nbsp &nbsp &nbsp Bolsa de Valores de El Salvador®. Todos los derechos reservado";
  tabIndex = 0;
  onTabClick(index) {
    this.tabIndex = index;
    if (index === 2) {
      this.toggleMicroTwo();
    }

    // cierro el sidebar al dar click en algun link de la pagina
    this.toggle_sidebar();
  }
  title = "micro-front";

  toShow: SafeHtml = "";

  constructor(private sanitizer: DomSanitizer) {}

  // agrego una variable para validar y poder control sobre el toggle del sidebar
  status: boolean = true;
  // Agregamos una funcion en la cual validaremos el estado del sidebar , esta funcion se debe de agregar en el evento (click) para que se cierre automaticamente
  toggle_sidebar() {
    // valido que entra a la funcion
    this.status = !this.status;
    // veo que este realizando el cambio de estado
    console.log(this.status);
  }

  toggle_dropdown() {}
  private loadScript(url: string): void {
    //cargamos el escript que nos ayudara a mostrar a nuestros componentes
    if (document.querySelectorAll(`script[src='${url}']`).length === 0) {
      const script = document.createElement("script");
      script.onload = function() {
        // do stuff with the script
      };
      script.src = url;
      document.head.appendChild(script);
    }
  }

  public toggleMicroOne() {
    // Componente compilado como un microcomponete de Login
    // if (!this.toShow) {
    console.log("alerta");
    this.loadScript("elements/micro-one.js");
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
    console.log("alerta");
    this.loadScript("elements/micro-two.js");
    this.toShow = this.sanitizer.bypassSecurityTrustHtml(`<micro-two>
      <div class="loader-05"></div>
      </micro-two>`);
    // } else {
    //   this.toShow = '';
    // }
  }
}
