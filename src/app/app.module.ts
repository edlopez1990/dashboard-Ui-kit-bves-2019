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
import { CalendarComponent } from './allcomponents/calendar/calendar.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { CalendarRangeComponent } from './allcomponents/calendar-range/calendar-range.component';
import { InputNumberComponent } from './allcomponents/input-number/input-number.component';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';
import { InputTimeComponent } from './allcomponents/input-time/input-time.component';
import { CheckboxComponent } from './allcomponents/checkbox/checkbox.component';
import { CheckboxFrameComponent } from './allcomponents/checkbox-frame/checkbox-frame.component';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { SliderLimitsComponent } from './allcomponents/slider-limits/slider-limits.component';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { ChipsComponent } from './allcomponents/chips/chips.component';
import { ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { TooltipComponent } from './allcomponents/tooltip/tooltip.component';
import { TooltipModule } from '@syncfusion/ej2-angular-popups';
import { CardComponent } from './allcomponents/card/card.component';
import { ToastComponent } from './allcomponents/toast/toast.component';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AcordionComponent } from './allcomponents/acordion/acordion.component';
import { TabsComponent } from './allcomponents/tabs/tabs.component';

import { AccordionModule } from '@syncfusion/ej2-angular-navigations';

import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { MenuComponent } from './allcomponents/menu/menu.component';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { PopupComponent } from './allcomponents/popup/popup.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { MenuVerticalComponent } from './allcomponents/menu-vertical/menu-vertical.component';
import { ContextMenuComponent } from './allcomponents/context-menu/context-menu.component';

import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './allcomponents/chart/chart.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, ScatterSeriesService, LineSeriesService,TrendlinesService} from '@syncfusion/ej2-angular-charts';


import { AreaSeriesService, RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService, 
      DateTimeService, MultiColoredAreaSeriesService } from '@syncfusion/ej2-angular-charts';
      // import {  ScatterSeriesService, LineSeriesService, DateTimeService, TrendlinesService} from '@syncfusion/ej2-angular-charts';

      
enableRipple(true);
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, LoginComponent, ErrorComponent, DashboardComponent, UikitComponent, GridComponent, ButtonsComponent, GroupbuttonsComponent, SwitchComponent, TextboxComponent, DropdownlistComponent, CalendarComponent, CalendarRangeComponent, InputNumberComponent, InputTimeComponent, CheckboxComponent, CheckboxFrameComponent, SliderLimitsComponent, ChipsComponent, TooltipComponent, CardComponent, ToastComponent, AcordionComponent, TabsComponent, MenuComponent, PopupComponent, MenuVerticalComponent, ContextMenuComponent, HomeComponent, ChartComponent],
  imports: [ChartModule,ContextMenuModule,DialogModule,MenuModule,TabModule,AccordionModule,ToastModule,DatePickerModule,TooltipModule,ChipListModule,SliderModule,CheckBoxModule,FormsModule, NumericTextBoxModule,CalendarModule, TextBoxModule,DropDownListModule,SwitchModule,ButtonModule,GridModule,BrowserModule, AppRoutingModule, RouterModule.forRoot([])],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService,CategoryService, LineSeriesService,AreaSeriesService , RangeAreaSeriesService, StepAreaSeriesService, StackingAreaSeriesService,
    DateTimeService, CategoryService, MultiColoredAreaSeriesService,TrendlinesService,ScatterSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
