import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home-page.component';
import {CarPage} from '../car/car.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'car',
    component: CarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
