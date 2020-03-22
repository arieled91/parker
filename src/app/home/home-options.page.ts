import {Component, Input} from '@angular/core';
import {Car} from '../car/model/car.model';
import {NavParams, PopoverController} from '@ionic/angular';
import {Router} from '@angular/router';
import {CarStore} from '../car/store/car.store';

@Component({
  selector: 'home-options-page',
  template: `
      <ion-list>
          <ion-list-header>Opciones</ion-list-header>
          <ion-item button (click)="onAddCar()">
              <ion-icon slot="start"  name="add-outline"></ion-icon>
              <ion-label>Nuevo Auto</ion-label>
          </ion-item>
          <ion-item button *ngIf="car" (click)="onEditCar()">
              <ion-icon slot="start"  name="create-outline"></ion-icon>
              <ion-label>Editar</ion-label>
          </ion-item>
          <ion-item button *ngIf="car" (click)="onDeleteCar()">
              <ion-icon slot="start"  name="trash-outline"></ion-icon>
              <ion-label>Eliminar</ion-label>
          </ion-item>
      </ion-list>
  `,
})
export class HomeOptionsPage {

  @Input() car: Car;
  @Input() controller: PopoverController;

  constructor(
    private navParams: NavParams,
    private router: Router,
    private carStore: CarStore
  ) {
  }

  dismiss() {
    this.controller.dismiss();
  }

  onAddCar() {
    this.router.navigate(['car']).then(()=> this.dismiss())
  }

  onEditCar() {
    this.router.navigate(['car', this.car.id]).then(()=> this.dismiss())
  }

  onDeleteCar() {
    this.carStore.delete(this.car);
    this.dismiss();
  }
}
