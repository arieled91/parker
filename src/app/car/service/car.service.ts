import {Injectable} from '@angular/core';
import {Car} from '../model/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsKey = 'cars';

  constructor(private storage: Storage) { }


  public insert(newCar: Car): void {
    const cars = this.findAll().push(newCar);
    this.storage.setItem(this.carsKey, cars.toString());
  }

  public findAll(): Car[] {
    const items: string = this.storage.getItem(this.carsKey);
    return (items ? JSON.parse(items) : []) as Car[];
  }

  delete(car: Car): void {

  }
}
