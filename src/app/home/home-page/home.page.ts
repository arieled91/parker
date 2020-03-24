import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarStore} from '../../car/store/car.store';
import {Subscription} from 'rxjs';
import {Car, CarLocation} from '../../car/model/car.model';
import {Router} from '@angular/router';
import {LoadingController, PopoverController} from '@ionic/angular';
import {HomeOptionsComponent} from '../home-options/home-options.component';
import {LocationUtils} from '../../location/location.utils';
import {error} from 'util';

@Component({
  selector: 'app-index',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  private car: Car;
  private subscriptions: Subscription[] = [];
  loading: HTMLIonLoadingElement;

  constructor(
    private carStore: CarStore,
    private router: Router,
    private popoverController: PopoverController,
    private loadingController: LoadingController
  ) {
    this.carStore.load();
    this.initLoading()
  }

  ngOnInit() {
    this.subscriptions.push(this.carStore.selected().subscribe(car => this.car = car));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  async showCarOptions(event: any, car: Car) {
    const popover = await this.popoverController.create({
      component: HomeOptionsComponent,
      componentProps: {car: car, controller: this.popoverController},
      event: event,
      translucent: true,
      backdropDismiss: true
    });
    return await popover.present();
  }


  saveLocation() {
    this.loading.present();
    LocationUtils.getPosition().subscribe(
      (position: Position) => {
        this.loading.dismiss();
        let car = {...this.car, location: new CarLocation(position.coords.latitude, position.coords.longitude)};
        this.carStore.update(car);
    },
      error => {
        this.loading.dismiss();
        console.log(error)
    });

  }

  async initLoading(){
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 30000
    });
  }
}
