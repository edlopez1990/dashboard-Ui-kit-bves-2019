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
   }
}
