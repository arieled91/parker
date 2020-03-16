import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Car} from '../car/model/car.model';
import {CarService} from '../car/service/car.service';
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
  cars: Car[];

  constructor(
      private menu: MenuController,
      private carService: CarService,
      private router: Router,
  ) {
    this.$cars = this.carService.findAll();
  }

  ngOnInit() {
  }

  addCar() {
    this.router.navigate(['car']).then(() => this.menu.close(this.mainMenu));
  }

}
