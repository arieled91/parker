import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {AddCarPage} from './pages/add-car.page';
import {CarPageRoutingModule} from './car-routing.module';
import {CarFormViewPage} from './pages/car-form-view/car-form-view.page';
import {EditCarPage} from './pages/edit-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AddCarPage,
    EditCarPage,
    CarFormViewPage
  ]
})
export class CarPageModule {
}
