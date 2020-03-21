import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Car} from '../model/car.model';
import {CarStore} from '../store/car.store';
import {Observable, of, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'edit-car-page',
  template: `
      <app-car-form-view [car]="$car | async" (save)="onSave($event)"></app-car-form-view>
  `,
})
export class EditCarPage implements OnInit {

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
