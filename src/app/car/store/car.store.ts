import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from '../model/car.model';
import {selectAllCars, selectCurrentCar} from './car.selector';
import {AppState} from '../../store';
import {Store} from '@ngrx/store';
import * as actions from './car.action';
import {loadCar, selectCar} from './car.action';

@Injectable({
  providedIn: 'root'
})
export class CarStore {

  constructor(private store: Store<AppState>) {
  }

  public create(car: Car): void {
    this.store.dispatch(actions.createCar({car: car}));
  }

  public update(car: Car): void {
    this.store.dispatch(actions.updateCar({car: car}));
  }

  public save(car: Car): void {
    if (car.id) {
      this.update(car);
    } else {
      this.create(car);
    }
  }

  public select(id: string): void {
    return this.store.dispatch(selectCar({id: id}));
  }

  public selected(): Observable<Car> {
    return this.store.select(selectCurrentCar);
  }

  private loadById(id: string) {
    this.store.dispatch(loadCar({id: id}));
  }

  public findAll(): Observable<Car[]> {
    return this.store.select(selectAllCars);
  }

  public delete(car: Car): void {
    this.store.dispatch(actions.deleteCar({car: car}));
  }

  public load(): void {
    this.store.dispatch(actions.loadAllCars())
  }
}
