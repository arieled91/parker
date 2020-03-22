import {Injectable} from '@angular/core';
import {Car} from '../model/car.model';
import * as uuid from 'uuid';
import {Storage} from '@ionic/storage';
import * as moment from 'moment';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Observable, of} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';


const CARS_KEY = 'cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {


  constructor(private storage: Storage) { }

  public create(newCar: Car): Observable<Car> {
    const id: string = uuid.v4(); // generating id
    const car: Car = {...newCar, id}; // set id to new car

    return this.findAll().pipe(
        tap(cars => {
          if(cars && cars.length>0) {
            cars.push(car);
            return this.storage.set(CARS_KEY, cars).then(() => car);
          }else {
            return this.storage.set(CARS_KEY, [car]).then(() => car);
          }
        }),
        switchMap(() => of(car))
    );
  }

  public findAll(): Observable<Car[]> {
    return fromPromise<Car[]>(this.storage.get(CARS_KEY)).pipe(
      map(cars => cars && cars.toString() !== '[object Object]' ? [...cars] : [])
    );
  }

  public find(id: string): Observable<Car | null> {
    return this.findAll().pipe(
      map(cars => {
        const filtered = cars.filter(car => car.id === id);
        return filtered.length > 0 ? filtered[0] : null;
      })
    )
  }

  public delete(deleteCar: Car): Observable<Car> {
    return this.findAll().pipe(
      tap(cars => {
        if (cars) {
          var index = cars.findIndex(car => car.id === deleteCar.id);
          let remaining = cars.splice(index, 1);
          return this.storage.set(CARS_KEY, remaining);
        }
      }),
      switchMap(() => of(deleteCar))
    );

  }


  // public async delete(deleteCar: Car): Promise<void> {
  //   const cars = [...await this.findAll()];
  //   let delIndex = cars.findIndex(car => car.id === deleteCar.id);
  //   cars.splice(delIndex, 1);
  //   await this.storage.set(this.carsKey, cars.toString());
  // }

  // public async update(updateCar: Car): Promise<Car> {
  //   const cars = [...(await this.findAll())];
  //   const indexToUpdate = cars.findIndex(car => car.id === updateCar.id);
  //   const modifiedCar = {...updateCar, modified: moment().unix()}; // update modified field
  //   if (indexToUpdate >= 0) { cars[indexToUpdate] = modifiedCar; } // actually changing the array
  //   await this.storage.set(CARS_KEY, cars.toString());
  //   return modifiedCar;
  // }


  public update(updateCar: Car): Observable<Car> {
    const modifiedCar = {...updateCar, modified: moment().unix()}; // update modified field

    return this.findAll().pipe(
      tap(cars => {
        const indexToUpdate = cars.findIndex(car => car.id === updateCar.id);
        if (indexToUpdate >= 0) { cars[indexToUpdate] = modifiedCar; } // actually changing the array
        return this.storage.set(CARS_KEY, cars.toString());
      }),
      map(() => modifiedCar)
    )

  }
}
