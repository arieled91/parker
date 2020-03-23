import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CarAddPage} from './components/car-add-page/car-add.page';
import {CarPageRoutingModule} from './car-routing.module';
import {CarFormComponent} from './components/car-form/car-form.component';
import {CarEditPage} from './components/car-edit-page/car-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CarAddPage,
    CarEditPage,
    CarFormComponent
  ]
})
export class CarPageModule {
}
