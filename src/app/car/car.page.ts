import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Car} from './model/car.model';
import {CarStore} from './store/car.store';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit, AfterViewInit, OnDestroy {

  carForm: FormGroup;
  car: Car = new Car();
  subscriptions: Subscription[] = [];

  constructor(
      private formBuilder: FormBuilder,
      private carStore: CarStore,
      private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.carForm = this.formBuilder.group({
      id: [null],
      name: ['', Validators.required],
      brand: [null],
      model: [null],
      description: [null]
    });

    this.subscriptions.push(this.carForm.valueChanges.subscribe(val => {
      this.car.id = val.id;
      this.car.name = val.name;
      this.car.brand = val.brand;
      this.car.model = val.model;
      this.car.description = val.description;
    }));
  }

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => { if (id) { this.carStore.select(id); }}),
      tap(id => this.populateCar(id))
    );
  }

  private populateCar(id: string) {
    if (id) {
      this.subscriptions.push(this.carStore.selected().subscribe(car => this.car = car));
    } else {
      this.car = new Car();
    }
  }

  ngAfterViewInit() {
    this.carForm.patchValue(val => {
      val.id = this.car.id;
      val.name = this.car.name;
      val.brand = this.car.brand;
      val.model = this.car.model;
      val.description = this.car.description;
    });
  }


  save() {
    this.carStore.create(this.car);
    // this.carService.findAll().subscribe(data => console.log(data));
    // this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
