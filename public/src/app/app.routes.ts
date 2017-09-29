import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MyExperimentsComponent } from './my-experiments';
import { InterpolationComponent } from './my-experiments/interpolation';
import { PropertyBindingComponent } from './my-experiments/property-binding';

import { JhipsterDropdownMenuComponent } from '../assets/layouts/drop-down-menus/jhipster-dropdown-menu/jhipster-dropdown-menu.component';
import { W3schoolDropdownMenuComponent } from "../assets/layouts/drop-down-menus/w3school-dropdown-menu/w3school-dropdown-menu.component";
import { ThreeLinesToXDropdownMenuComponent } from "../assets/layouts/drop-down-menus/threelines-toX-dropdown-menu/threelines-toX-dropdown-menu.component";
import { IconXDropdownMenuComponent } from "../assets/layouts/drop-down-menus/icon-x-dropdown-menu/icon-x-dropdown-menu.component";


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},

  { path: 'my-experiments', component: MyExperimentsComponent},
  { path: 'my-experiments/interpolation', component: InterpolationComponent},
  { path: 'my-experiments/prop-binding', component: PropertyBindingComponent},

  { path: 'dropdown-jhipster', component: JhipsterDropdownMenuComponent},
  { path: 'dropdown-w3school', component: W3schoolDropdownMenuComponent},
  { path: 'dropdown-threelines', component: ThreeLinesToXDropdownMenuComponent},
  { path: 'dropdown-iconx', component: IconXDropdownMenuComponent}

];
