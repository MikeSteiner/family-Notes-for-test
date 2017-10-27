import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DateTimePickerModule } from 'ng-pick-datetime';
import { CalendarModule } from 'primeng/components/calendar/calendar';

// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RouterModule} from '@angular/router';
import { appRoutes} from "./app.routes";
import { MyExperimentsModule } from './my-experiments/my-experiments.module';
import { ApplicationStatusComponent } from './application/application-status/application-status.component';
import { ApplicationLoanApproveComponent } from './application/application-loan-approve/application-loan-approve.component';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';

import {DataTableModule, SharedModule} from 'primeng/primeng';

import { ApplicationService } from './services/application.service';

import { JhipsterDropdownMenuComponent } from '../assets/layouts/drop-down-menus/jhipster-dropdown-menu/jhipster-dropdown-menu.component';
import { W3schoolDropdownMenuComponent } from '../assets/layouts/drop-down-menus/w3school-dropdown-menu/w3school-dropdown-menu.component';
import { ThreeLinesToXDropdownMenuComponent } from '../assets/layouts/drop-down-menus/threelines-toX-dropdown-menu/threelines-toX-dropdown-menu.component';
import { IconXDropdownMenuComponent } from '../assets/layouts/drop-down-menus/icon-x-dropdown-menu/icon-x-dropdown-menu.component';
import { LinesToXDropDownMenuComponent } from "../assets/layouts/drop-down-menus/lines-to-x-updated--dropdown-updated-menu/lines-to-x-updated-dropdown-menu.component";
import { NgDateTimePickerComponent } from '../assets/layouts/date-time-picker/ng-date-time-picker/ng-date-time-picker.component';
import { PrimeNgCalenderComponent } from '../assets/layouts/date-time-picker/primeng-p-calender/primeng-calender.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ApplicationDatatableComponent } from './primeng/application-datatable/application-datatable.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    HomeModule,
    MyExperimentsModule,
    RouterModule.forRoot(appRoutes),
    DateTimePickerModule,
    CalendarModule,
    DataTableModule,
    SharedModule
    // NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ApplicationStatusComponent,
    ApplicationLoanApproveComponent,
    DashboardDataComponent,
    JhipsterDropdownMenuComponent,
    W3schoolDropdownMenuComponent,
    ThreeLinesToXDropdownMenuComponent,
    IconXDropdownMenuComponent,
    LinesToXDropDownMenuComponent,
    NgDateTimePickerComponent,
    PrimeNgCalenderComponent,
    NavigationComponent,
    ApplicationDatatableComponent
  ],
  providers: [
    ApplicationService
  ],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule {
}
