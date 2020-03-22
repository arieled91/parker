import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';
import {RouterModule} from '@angular/router';
import {AddCarPage} from '../car/pages/add-car.page';
import {HomeOptionsPage} from './home-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomePage,
    HomeOptionsPage
  ],
  entryComponents: [
    HomeOptionsPage
  ]
})
export class HomePageModule {
}
