import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ErrorComponent } from "./error/error.component";

import { RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UikitComponent } from './uikit/uikit.component';

// import the GridModule for the Grid component
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { GridComponent } from './allcomponents/grid/grid.component';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ButtonsComponent } from './allcomponents/buttons/buttons.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { GroupbuttonsComponent } from './allcomponents/groupbuttons/groupbuttons.component';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { SwitchComponent } from './allcomponents/switch/switch.component';
import { TextboxComponent } from './allcomponents/textbox/textbox.component';
import { DropdownlistComponent } from './allcomponents/dropdownlist/dropdownlist.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';
enableRipple(true);
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, LoginComponent, ErrorComponent, DashboardComponent, UikitComponent, GridComponent, ButtonsComponent, GroupbuttonsComponent, SwitchComponent, TextboxComponent, DropdownlistComponent],
  imports: [  TextBoxModule,DropDownListModule,SwitchModule,ButtonModule,GridModule,BrowserModule, AppRoutingModule, RouterModule.forRoot([])],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService],
  bootstrap: [AppComponent]
})
export class AppModule {}
