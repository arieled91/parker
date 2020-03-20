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

  public update(car: Car): void {
    this.store.dispatch(new CarActions.UpdateCar(car));
  }

  public save(car: Car): void {
    if (car.id) {
      this.update(car);
    } else {
      this.create(car);
    }
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

  public delete(car: Car): void {
    this.store.dispatch(new CarActions.DeleteCar(car));
  }
}
