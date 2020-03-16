import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';
import {CarPage} from '../car/car.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage
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
