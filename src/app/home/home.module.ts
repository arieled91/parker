import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home-page/home.page';
import {RouterModule} from '@angular/router';
import {CarAddPage} from '../car/components/car-add-page/car-add.page';
import {HomeOptionsComponent} from './home-options/home-options.component';
import {MapComponent} from '../location/map/map.component';

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
    HomeOptionsComponent,
    MapComponent,
  ],
  entryComponents: [
    HomeOptionsComponent,

  ]
})
export class HomePageModule {
}
