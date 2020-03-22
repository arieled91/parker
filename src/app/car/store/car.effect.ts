import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, concatMap, map, mergeMap, tap} from 'rxjs/operators';
import * as actions from './car.action';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {CarService} from '../service/car.service';
import {ToastController} from '@ionic/angular';
import {Car} from '../model/car.model';

@Injectable()
export class CarEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private carService: CarService,
    public toastController: ToastController
  ) {
  }

  loadAllCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadAllCars),
      mergeMap(() =>
        this.carService.findAll().pipe(
          map((data: Car[]) => {
            return actions.loadAllCarsSuccess({car: data});
          }),
          catchError((error: Error) => {
            return of(actions.carActionFail(error));
          })
        )
      )
    )
  );

  deleteCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteCar),
      mergeMap(action =>
        this.carService.delete(action.car).pipe(
          map((data: Car) => {
            return actions.deleteCarSuccess({car: data});
          }),
          catchError((error: Error) => {
            return of(actions.carActionFail(error));
          })
        )
      )
    )
  );

  deleteCarSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteCarSuccess),
      tap(() => this.showInfoToast('Eliminado')),
      map(() => actions.loadAllCars())
    ),
    { dispatch: false }
  );

  createCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.createCar),
      mergeMap(action =>
        this.carService.create(action.car).pipe(
          map((data: Car) => {
            return actions.createCarSuccess({car: data});
          }),
          catchError((error: Error) => {
            return of(actions.carActionFail(error));
          })
        )
      )
    )
  );

  createCarSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.createCarSuccess),
      tap(() => {
        this.router.navigate(['/']);
        this.showInfoToast('Creado');
      }),
    ),
    { dispatch: false }
  );

  loadCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadCar),
      mergeMap(action =>
        this.carService.find(action.id).pipe(
          map((data: Car) => {
            return actions.loadCarSuccess({car: data});
          }),
          catchError((error: Error) => {
            return of(actions.carActionFail(error));
          })
        )
      )
    )
  );

  updateCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateCar),
      mergeMap(action =>
        this.carService.update(action.car).pipe(
          map((data: Car) => {
            return actions.updateCarSuccess({car: data});
          }),
          catchError((error: Error) => {
            return of(actions.carActionFail(error));
          })
        )
      )
    )
  );

  updateCarSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateCarSuccess),
      tap(() => {
        this.router.navigate(['/']);
        this.showInfoToast('Guardado');
      })
    ),
    { dispatch: false }
  );

  carActionFail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.carActionFail),
      tap(() => {
        this.showInfoToast('Guardado');
      })
    ),
    { dispatch: false }
  );

  private showInfoToast(message: string, duration: number = 4000) {
    this.toastController.create({message, duration}).then(toast => toast.present());
  }

  private showErrorToast(message: string, duration: number = 8000) {
    this.toastController.create({message, duration, color: 'danger'}).then(toast => toast.present());
  }

}
