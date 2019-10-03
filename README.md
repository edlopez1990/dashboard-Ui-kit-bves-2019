# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Try app

Execute this scripts in the order:
1) `npm install`
2) `npm run build:elements`
3) `npm start`

## Create new Micro module

* Execute `ng generate application micro-module-name`
* Copy and adapt `/projects/micro-one/build.js` to your new project
* Comment `import 'zone.js/dist/zone';` on `polyfills` of the new project
* Replace `bootstrap` by `entryComponents` into `app.module.ts`
* Copy this code into your `AppModule`
  ```
  constructor(injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('micro-module-name', el);
  }

  ngDoBootstrap() {}
  ``` 
* Add and adapt needed scripts on `package.json`


## Components Structure

```
.
└── project
    ├── package.json
    ├── index.html
    │── style.scss // All style and import style of the other components
    │── README.md
    └── app        // All components 
    │  ├── allcomponents // components syncfusion.js
    │   │   
    │   │── dashboard
    │   │   
    │   │── error
    │   │   
    │   ├── home
    │   │   
    │   ├── login
    │   │   
    │   └── components  // root component
    │     ├── app-routing.module.ts // routs components
    │     └── app.module.ts 
    └── assets //img and style from individual components
    
```
### Estructura del archivo package.json

El archivo contiene la información base para la instalación de nuestro proyecto, como los son los plugins y librerias instalados asi como la secuencia de instalacion de nuestro proyecto.


```
.
└── project
     └── package.json
    
```
### Estructura del archivo style.scss

El archivo contiene los estilos que sobre escribiran la de los componentes de Syncfusion

```
.
└── project
     └── style.scss
    
```

- 01 - ui/kit class btn primario
- 02 - ui/kit class btn secundario
- 03 - ui/kit class btn primario compra
- 04 - ui/kit class btn secundario compra
- 05 - ui/kit class btn primario venta
- 06 - ui/kit class btn secundario venta
- 07 - ui/kit class group buttons
- 08 - ui/kit class group buttons compra
- 09 - ui/kit group buttons venta
- 10 - ui/kit - toggleswitch
- 11 - ui/kit textbox
- 12 - ui/kit Dropdown
- 13 - ui/kit Grid
- 14 - ui/kit Input number
- 15 - ui/kit checkbox
- 16 - ui/kit horizontal menu
- 17 - ui/kit vertical menu
- 18 - ui/kit card
- 19 - ui/kit Tab
- 20 - ui/kit Tooltip
- 21 - ui/kit Toast
- 22 - ui/kit Popup
- 23 - ui/kit Dialog
- 24 - ui/kit Slider
- 25 - ui/kit Calendar
- 26 - ui/kit Ui Chip
- 27 - ui/kit calendar rangue
- 28 - ui/kit tooltip
- 28 - 01 - ui/kit tooltip app
- 28 - 02 - ui/kit tooltip logout 
- 28 - 03 - ui/kit tooltip Notification 
- 30 -  Import style project



### Estructura de la carpeta de assets 

Dentro de esta se encuentran las hojas de estilo para los componentes principales, los cuales son : Login, Error, Dashboard


```
.
└── Assets
     └── css
          │── login.scss
          │── error.scss
          └── dashboard.scss
     │ 
     └── img
    
```

### Estructura del componente root 

El archivo contiene los estilos que sobre escribiran la de los componentes de Syncfusion

```
.
└── project
     └── components  // root component
        ├── app-routing.module.ts // routs components
        └── app.module.ts 
    
```
####  app-routing.module.ts

En Angular, la mejor práctica es cargar y configurar el enrutador en un módulo separado de nivel superior que esté dedicado al enrutamiento e importado por la raíz AppModule.

```
{
    path: "login",//Carga individual del componente Login
    component: LoginComponent
  },
  {
    path: "error",//Carga individual del componente Error
    component: ErrorComponent
  },
  {
    path: "dashboard",//Carga individual del componente Dashboard
    component: DashboardComponent
  },
  {
    path: "home",//Carga individual del componente Home
    component: HomeComponent
  },
  {
    path: "uikit",//Aqui estan todos los componentes de ejemplo utilizados
    component: UikitComponent
  },
  {
    path: "",  //Componente raiz,(se cargara por defecto).
    component: DashboardComponent
  }

```

#### app.module.ts

Una clase de módulo angular describe cómo encajan las partes de la aplicación. Cada aplicación tiene al menos un módulo angular, el módulo raíz que arranca para iniciar la aplicación. Puedes llamarlo como quieras. El nombre convencional es AppModule.


## Como cargar un componente y utilizar los estilos nuevos

#### Ejemplos

##### Componente de Buttons

Tomaremos el selector que esta ubicado dentro  de buttons.component.ts y copiaremos el selector el cual debe ser el selector: 'app-buttons' el cual colocaremos dentro de cualquier nuevo componente utilizando las clase creada para este componente, se puede analizar el componente de prueba mostrado en el ui/kit.



```sh

 <app-buttons class="btn-ui btn-primario"></app-buttons>

 <app-buttons class="btn-ui btn-primario-venta"></app-buttons>

 <app-buttons class="btn-ui btn-primario-compra"></app-buttons>

```

Usando las clases "btn-ui btn-primario" usados en los ejemplos del ui/kit, el uso de parametros esta aplicado a la documentación de angular 



##### Componente de Textbox

```sh

 <app-textbox class="textbox"></app-textbox>

```

Usando las clases "textbox" usados en los ejemplos del ui/kit

##### Componente de Dropdownlist

```sh

 <app-dropdownlist class="dropdown"></app-dropdownlist>

```
Usando las clases "dropdown" usados en los ejemplos del ui/kit


##### Componente de Grid

```sh

 <app-grid class='custom-grid'></app-grid>

```
Usando las clases "custom-grid" usados en los ejemplos del ui/kit

##### Componente de Calendar

```sh

 <app-calendar class="ui-calendar"></app-calendar>

```
Usando las clases "ui-calendar" usados en los ejemplos del ui/kit

##### Componente de Calendar Range

```sh

 <app-calendar-range class="ui-calendar-rangue"></app-calendar-range>

```
Usando las clases "ui-calendar-rangue" usados en los ejemplos del ui/kit


##### Componente de Calendar Range

```sh

 <app-input-number class="input-number"></app-input-number>

```
Usando las clases "input-number" usados en los ejemplos del ui/kit

##### Componente de Checkbox

```sh

 <app-checkbox class="ui-checkbox"></app-checkbox>

```

Usando las clases "ui-checkbox" usados en los ejemplos del ui/kit

##### Componente de Checkbox Frame

```sh

 <app-checkbox-frame class="ui-checkbox"></app-checkbox-frame>

```
 Usando las clases "ui-checkbox" usados en los ejemplos del ui/kit


##### Componente de Slider

```sh

 <app-slider-limits class="ui-slider"></app-slider-limits>

```
Usando las clases "ui-slider" usados en los ejemplos del ui/kit

##### Componente de Tooltip

```sh

 <app-tooltip class="ui-tooltip"></app-tooltip>

```
Usando las clases "ui-tooltip" usados en los ejemplos del ui/kit

##### Componente de Card

```sh

  <app-card class="ui-card"></app-card>

```
Usando las clases "ui-card" usados en los ejemplos del ui/kit


##### Componente de Acordion

```sh

   <app-acordion class="ui-acordion"></app-acordion>

```
Usando las clases "ui-acordion" usados en los ejemplos del ui/kit


##### Componente de Tabs

```sh

   <app-tabs class="ui-tab"></app-tabs>

```
Usando las clases "ui-tab" usados en los ejemplos del ui/kit

##### Componente de Menu Horizontal

```sh

  <app-menu class="ui-horizontal-menu"></app-menu>

```
Usando las clases "ui-horizontal-menu" usados en los ejemplos del ui/kit

##### Componente de Menu Vertical

```sh

 <app-menu-vertical class="ui-vertical-menu"></app-menu-vertical>

```
Usando las clases "ui-vertical-menu" usados en los ejemplos del ui/kit


##### Componente de Popup

```sh

 <app-popup class="ui-popup"></app-popup>

```
Usando las clases "ui-popup" usados en los ejemplos del ui/kit


##### Componente de Context-menu

```sh

 <app-context-menu class="ui-context-menu" cssClass="ui-context-menu"></app-context-menu>

```
Usando las clases "ui-context-menu" usados en los ejemplos del ui/kit


##### Componente de Chips

```sh

 <app-chips class="ui-chip"></app-chips>

```
Usando las clases "ui-chip" usados en los ejemplos del ui/kit


### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | Documentation |
| ------ | ------ |
| syncfusion for Angular | [Documentation](https://ej2.syncfusion.com/angular/documentation/introduction/?no-cache=1) |



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
