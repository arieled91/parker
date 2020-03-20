import {Actions, Effect, ofType} from '@ngrx/effects';
import {from, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {map, switchMap, tap, mergeMap} from 'rxjs/operators';
import {CarActionType, CreateCar, CreateCarSuccess, LoadCar, LoadCarSuccess} from './car.action';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {CarService} from '../service/car.service';
import {Car} from '../model/car.model';
import {ToastController} from '@ionic/angular';

@Injectable()
export class CarEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private carService: CarService,
    public toastController: ToastController
  ) {
  }

  @Effect()
  public createCar$: Observable<Action> = this.actions$.pipe(
    ofType(CarActionType.CREATE_CAR),
    map((action: CreateCar) => action.payload),
    switchMap(car => this.createCar(car)),
    map(car => new CreateCarSuccess(car))
  );

  @Effect({ dispatch: false })
  public createCarSuccess$: Observable<void> = this.actions$.pipe(
    ofType(CarActionType.CREATE_CAR_SUCCESS),
    map((action: CreateCarSuccess) => action.payload),
    tap(() => this.router.navigate(['/'])),
    mergeMap(() => [this.showInfoToast('¡Se agregó el auto nuevo!')])
  );

  @Effect()
  public loadCar$: Observable<Action> = this.actions$.pipe(
    ofType<LoadCar>(CarActionType.LOAD_CAR),
    map(action => action.payload),
    switchMap(payload => this.carService.find(payload.id)),
    map(car => new LoadCarSuccess(car))
  );

  private createCar(car: Car): Observable<Car> {
    return new Observable<Car>(subs => {
      this.carService.create(car).then(data => subs.next(data));
    });
  }

  private showInfoToast(message: string, duration: number = 4000) {
    this.toastController.create({message, duration}).then(toast => toast.present());
  }
}
