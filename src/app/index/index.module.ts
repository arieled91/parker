import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import {RouterModule} from '@angular/router';
import {CarPage} from '../car/car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: IndexPage
      },
      {
        path: 'car',
        component: CarPage
      }
    ]),
    ReactiveFormsModule,
  ],
  declarations: [
    IndexPage,
    CarPage,
  ]
})
export class IndexPageModule {}
