import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {CarPage} from './car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {path: '', component: CarPage},
      {path: ':id', component: CarPage}
    ]),
    ReactiveFormsModule,
  ],
  declarations: [
    CarPage
  ]
})
export class CarPageModule {
}
