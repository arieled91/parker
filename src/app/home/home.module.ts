import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {IndexPageRoutingModule} from './home-routing.module';

import {HomePage} from './home-page.component';
import {RouterModule} from '@angular/router';
import {CarPage} from '../car/car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
    RouterModule.forChild([
      { path: '', component: HomePage },
      { path: 'car', component: CarPage },
    ]),
    ReactiveFormsModule,
  ],
  declarations: [
    HomePage,
    CarPage,
  ]
})
export class HomePageModule {
}
