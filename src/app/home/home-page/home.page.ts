import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CarStore} from '../../car/store/car.store';
import {Subscription} from 'rxjs';
import {Car, CarLocation} from '../../car/model/car.model';
import {NavigationEnd, Router} from '@angular/router';
import {LoadingController, PopoverController} from '@ionic/angular';
import {HomeOptionsComponent} from '../home-options/home-options.component';
import {MapComponent} from '../../location/map/map.component';
import {MapPosition} from '../../location/map/map.model';

@Component({
  selector: 'app-index',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  car: Car;
  private subscriptions: Subscription[] = [];
  loading: HTMLIonLoadingElement;
  parkInfo: string = null;

  @ViewChild('map', {static: false}) map: MapComponent;

  constructor(
    private carStore: CarStore,
    private router: Router,
    private popoverController: PopoverController,
    private loadingController: LoadingController,
  ) {
    this.carStore.load();
    this.initLoading();
  }

  ngOnInit() {
    this.subscriptions.push(this.carStore.selected().subscribe(car => {
      if(car){
        this.car = car;
        if(car.location) this.parkInfo = car.location.description
      }
    }));
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
    let position: MapPosition = this.map.getPosition();
    let car = {...this.car, location: new CarLocation(position.lat, position.lon, this.parkInfo)};
    this.carStore.update(car);
  }

  async initLoading(){
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 30000
    });
  }
}
