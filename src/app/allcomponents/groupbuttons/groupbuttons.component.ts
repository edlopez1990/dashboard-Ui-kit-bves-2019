import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-groupbuttons',
  template: `<!-- To render ButtonGroup. -->
             <!-- Este es un componente de Ejemplo se puede usar este o el base de Syncfusion , recordemos que en el home tenemos agregados este componente ahi se explica como cambiar el texto, si deseamos modificar este componente Por ejemplo el texto , abajo se modificara y el cambio se ve reflejado en la vista de Uikit , recordemos que este es un componente separado y lo podemos mandara a llamar igualmente como estan en el componente de Uikit  -->
             <div class='e-btn-group'>
                <button ejs-button>Venta</button>
                <button ejs-button class="active"> Texto </button> <!-- el componente se mostrara con este texto en cualquier lugar que se ocupe en el caso del componente de uikit tenemos repetido el componente ya que solo son ejemplo aqui solo usamos la clase para ejemplo y el mismo componente--> 
              </div>
              <!-- aqui termina el html o template del componente , recordemos que podemos agregar el html directamente o agregamos una referencia a groupbuttons.componet.html --> 

              <!-- fin componente -->
              `,
  styleUrls: ['./groupbuttons.component.scss']
})
export class GroupbuttonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
