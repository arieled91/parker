import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarStore} from '../car/store/car.store';
import {Observable, Subscription} from 'rxjs';
import {Car} from '../car/model/car.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  private car: Car;
  private subscriptions: Subscription[] = [];

  constructor(
    private carStore: CarStore,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscriptions.push(this.carStore.selected().subscribe(car => this.car = car));
  }

  editCar() {
    this.router.navigate(['car', this.car.id]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
