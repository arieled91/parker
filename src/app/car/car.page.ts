import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Car} from './model/car.model';
import {CarStoreService} from './store/car-store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit, AfterViewInit {

  carForm: FormGroup;
  car: Car = new Car();

  constructor(
      private formBuilder: FormBuilder,
      private carService: CarStoreService,
      private router: Router,
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

    this.carForm.valueChanges.subscribe(val => {
      this.car.id = val.id;
      this.car.name = val.name;
      this.car.brand = val.brand;
      this.car.model = val.model;
      this.car.description = val.description;
    });
  }

  ngOnInit() {
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
    this.carService.insert(this.car);
    // this.carService.findAll().subscribe(data => console.log(data));
    // this.router.navigate(['/']);
  }
}
