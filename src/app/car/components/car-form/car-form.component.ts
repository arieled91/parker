import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {Car, CarLocation} from '../../model/car.model';
import {CarStore} from '../../store/car.store';

@Component({
  selector: 'app-car-form-view',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
})
export class CarFormComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @Input() title = 'Vehículo';
  private _car: Car;
  @Output() save = new EventEmitter<Car>();

  carForm: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(
      private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  @Input() public set car(car: Car) {
    this._car = {...car};
  }

  public get car(): Car {
    return this._car;
  }

  private buildForm() {
    this.carForm = this.formBuilder.group({
      id: [null],
      name: ['', Validators.required],
      brand: [null],
      model: [null],
      description: [null]
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.subscriptions.push(this.carForm.valueChanges.subscribe(val => {
      this.car.id = val.id;
      this.car.name = val.name;
      this.car.brand = val.brand;
      this.car.model = val.model;
      this.car.description = val.description;
    }));
  }


  onSave() {
    this.save.emit(this.car);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnChanges() {
    if(this.car) {
      this.carForm.patchValue({
        id: this.car.id,
        name: this.car.name,
        brand: this.car.brand,
        model: this.car.model,
        description: this.car.description,
      })
    }
  }
}
