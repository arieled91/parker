import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Car} from '../../model/car.model';
import {CarStore} from '../../store/car.store';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'car-edit-page',
  template: `
      <app-car-form-view [title]="'Editar Vehículo'" [car]="$car | async" (save)="onSave($event)"></app-car-form-view>
  `,
})
export class CarEditPage implements OnInit {

  $car: Observable<Car>;

  constructor(
    private formBuilder: FormBuilder,
    private carStore: CarStore,
    private activatedRoute: ActivatedRoute
  ) {
  }

  onSave(car: Car) {
    this.carStore.update(car);
  }

  ngOnInit() {
    this.$car = this.activatedRoute.paramMap.pipe(
      tap(params => this.carStore.select(params.get('id'))),
      switchMap(() => this.carStore.selected())
    );
  }
}
