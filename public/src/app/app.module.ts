import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RouterModule} from '@angular/router';
import { appRoutes} from "./app.routes";
import { MyExperimentsModule } from './my-experiments/my-experiments.module';
import { ApplicationStatusComponent } from './application-status/application-status.component';
import { ApplicationLoanApproveComponent } from './application-loan-approve/application-loan-approve.component';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import { JhipsterDropdownMenuComponent } from '../assets/layouts/drop-down-menus/jhipster-dropdown-menu/jhipster-dropdown-menu.component';
import { W3schoolDropdownMenuComponent } from '../assets/layouts/drop-down-menus/w3school-dropdown-menu/w3school-dropdown-menu.component';
import { ThreeLinesToXDropdownMenuComponent } from '../assets/layouts/drop-down-menus/threelines-toX-dropdown-menu/threelines-toX-dropdown-menu.component';
import { IconXDropdownMenuComponent } from '../assets/layouts/drop-down-menus/icon-x-dropdown-menu/icon-x-dropdown-menu.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    MyExperimentsModule,
    RouterModule.forRoot(appRoutes)
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
    IconXDropdownMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
