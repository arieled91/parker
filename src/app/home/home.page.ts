import { Component, OnInit } from '@angular/core';
import {CarStore} from '../car/store/car.store';
import {Observable} from 'rxjs';
import {Car} from '../car/model/car.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private car$: Observable<Car>;

  constructor(
    private carStore: CarStore,
    private router: Router
  ) { }

  ngOnInit() {
    this.car$ = this.carStore.selected();
  }

  editCar() {

  }
}
