import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {CarStore} from './car/store/car.store';
import {tap} from 'rxjs/operators';
import {Car, carComparer} from './car/model/car.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private carStore: CarStore
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initStore()
    });
  }

  private initStore() {
    this.carStore.load();
    this.carStore.findAll().pipe(
      tap(cars => {
        const sorted: Car[] = cars.sort(carComparer);
        if(sorted && sorted.length > 0) {
          this.carStore.select(sorted[0].id)
        }
      })
    ).subscribe()
  }
}
