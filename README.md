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
    │   ├── allcomponents // components syncfusion.js
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