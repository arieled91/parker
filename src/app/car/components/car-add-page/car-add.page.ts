import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Car} from '../../model/car.model';
import {CarStore} from '../../store/car.store';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'car-add-page',
  template: `
      <app-car-form-view [title]="'Nuevo Vehículo'" [car]="$car | async" (save)="onSave($event)"></app-car-form-view>
  `,
})
export class CarAddPage {

  $car: Observable<Car> = of(new Car());

  constructor(
      private formBuilder: FormBuilder,
      private carStore: CarStore
  ) {
  }

  onSave(car: Car) {
    this.carStore.create(car);
  }
}
