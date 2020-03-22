import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarStore} from '../car/store/car.store';
import {Observable, Subscription} from 'rxjs';
import {Car} from '../car/model/car.model';
import {Router} from '@angular/router';
import {PopoverController} from '@ionic/angular';
import {HomeOptionsPage} from './home-options.page';
import {map, tap} from 'rxjs/operators';

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
    private router: Router,
    private popoverController: PopoverController
  ) {
    this.carStore.load();
    // this.subscriptions.push(this.carStore.findAll().pipe(
    //   map(cars => cars[0]),
    //   tap(car => {
    //     if(car) {this.carStore.select(car.id)}
    //   })
    // ).subscribe())
  }

  ngOnInit() {
    this.subscriptions.push(this.carStore.selected().subscribe(car => this.car = car));
  }

  editCar() {
    this.router.navigate(['car', this.car.id]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  async showCarOptions(event: any, car: Car) {
    const popover = await this.popoverController.create({
      component: HomeOptionsPage,
      componentProps: {car: car, controller: this.popoverController},
      event: event,
      translucent: true,
      backdropDismiss: true
    });
    return await popover.present();
  }
}
