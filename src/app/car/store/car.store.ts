import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from '../model/car.model';
import {selectAllCars, selectCarById, selectCurrentCar} from './car.selector';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import * as CarActions from './car.action';
import {LoadCar, SelectCar} from './car.action';

@Injectable({
  providedIn: 'root'
})
export class CarStore {

  constructor(private store: Store<AppState>) {
  }

  public create(car: Car): void {
    this.store.dispatch(new CarActions.CreateCar(car));
  }

  public select(id: string): void {
    return this.store.dispatch(new SelectCar({id}));
  }

  public selected(): Observable<Car> {
    return this.store.select(selectCurrentCar);
  }

  private loadById(id: string) {
    this.store.dispatch(new LoadCar({id}));
  }

  public findAll(): Observable<Car[]> {
    return this.store.select(selectAllCars);
  }

  // public update(updatedCar: Car): Observable<Car> {
  //     return this.state.pipe(
  //         take(1),
  //         tap(cars => {
  //             const updateCars: Car[] = [...cars];
  //             const carIndex = updateCars.findIndex(storedCar => storedCar.id === updatedCar.id);
  //             if (carIndex < 0) {
  //                 throw throwError(`Car id "${updatedCar.id}" not found`);
  //             }
  //             updateCars[carIndex] = updatedCar;
  //         }),
  //         map(() => updatedCar)
  //     );
  // }

  // public save(car: Car): Observable<Car> {
  //     return car.id ? this.update(car) : this.insert(car);
  // }

  delete(car: Car): void {
    this.store.dispatch(new CarActions.DeleteCar(car));
  }
}
