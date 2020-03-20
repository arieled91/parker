import {Injectable} from '@angular/core';
import {Car} from '../model/car.model';
import * as uuid from 'uuid';
import {Storage} from '@ionic/storage';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsKey = 'cars';

  constructor(private storage: Storage) { }

  public async create(newCar: Car): Promise<Car> {
    const id: string = uuid.v4(); // generating id
    const car: Car = {...newCar, id}; // set id to new car
    const newCars = [...(await this.findAll()), car]; // insert new car
    await this.storage.set(this.carsKey, newCars);
    return car;
  }

  public async findAll(): Promise<Car[]> {
    const cars = await this.storage.get(this.carsKey);
    return cars ? cars : [];
  }

  public async find(id: string): Promise<Car | null> {
    const filtered = (await this.findAll()).filter(car => car.id === id);
    return filtered.length > 0 ? filtered[0] : null;
  }

  public async delete(deleteCar: Car): Promise<void> {
    const cars = (await this.findAll()).filter(car => car.id !== deleteCar.id);
    await this.storage.set(this.carsKey, cars.toString());
  }

  public async update(updateCar: Car): Promise<Car> {
    const cars = [...(await this.findAll())];
    const indexToUpdate = cars.findIndex(car => car.id === updateCar.id);
    const modifiedCar = {...updateCar, modified: moment().unix()}; // update modified field
    if (indexToUpdate >= 0) { cars[indexToUpdate] = modifiedCar; } // actually changing the array
    await this.storage.set(this.carsKey, cars.toString());
    return modifiedCar;
  }
}
