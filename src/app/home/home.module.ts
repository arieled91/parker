import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';
import {RouterModule} from '@angular/router';
import {AddCarPage} from '../car/pages/add-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forChild([
      { path: '', component: HomePage }
    ]),
    ReactiveFormsModule,
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {
}
