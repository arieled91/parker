import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Car} from '../car/model/car.model';
import {CarStore} from '../car/store/car.store';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  private mainMenu = 'main-menu';

  $cars: Observable<Car[]>;
  $selectedCar: Observable<Car>;

  constructor(
      private menu: MenuController,
      private carStore: CarStore,
      private router: Router,
  ) {
  }

  ngOnInit() {
    this.$cars = this.carStore.findAll();
    this.$selectedCar = this.carStore.selected();
  }

  addCar() {
    this.router.navigate(['car'])
      .then(() => this.menu.close(this.mainMenu));
  }

  selectCar(car: Car) {
    this.carStore.select(car.id);
    this.menu.close(this.mainMenu);
  }
}
