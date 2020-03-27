import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import * as actions from './car.action';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {CarService} from '../service/car.service';
import {LoadingController, ToastController} from '@ionic/angular';
import {Car} from '../model/car.model';

@Injectable()
export class CarEffects {

  loading: HTMLIonLoadingElement;

  constructor(
    private actions$: Actions,
    private router: Router,
    private carService: CarService,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
    this.initLoading();
  }

  loadAllCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadAllCars),
      tap(() => this.presentLoading()),
      mergeMap(() =>
        this.carService.findAll().pipe(
          map((data: Car[]) => {
            return actions.loadAllCarsSuccess({cars: data});
          }),
          catchError((error: Error) => {
            return of(actions.carActionFail(error));
          })
        )
      )
    )
  );

  loadAllCarsSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(actions.loadAllCarsSuccess),
        tap(action => {
          this.dismissLoading();
          if(!action.cars || action.cars.length <= 0){
            this.router.navigate(['car']);
          }
        })
      ),
    {dispatch: false}
  );

  deleteCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteCar),
      tap(() => this.presentLoading()),
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
        tap(() => {
          this.dismissLoading();
          this.showInfoToast('Eliminado');
        }),
        // map(() => actions.loadAllCars())
      ),
    {dispatch: false}
  );

  createCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.createCar),
      tap(() => this.presentLoading()),
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
        map((action => actions.selectCar({id: action.car.id}))),
        tap(() => {
          this.dismissLoading();
          this.router.navigate(['/']);
          this.showInfoToast('Creado');
        }),
      )
  );

  loadCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadCar),
      tap(() => this.presentLoading()),
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

  loadCarSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(actions.loadCarSuccess),
        tap(() => this.dismissLoading())
      ),
    {dispatch: false}
  );

  updateCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateCar),
      tap(() => this.presentLoading()),
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
          this.dismissLoading();
          this.router.navigate(['/']);
          this.showInfoToast('Guardado');
        })
      ),
    {dispatch: false}
  );

  carActionFail$ = createEffect(() =>
      this.actions$.pipe(
        ofType(actions.carActionFail),
        tap(error => {
          this.dismissLoading();
          this.showErrorToast('Error inesperado: ' + (error.message ? error.message : error.stack));
        })
      ),
    {dispatch: false}
  );

  private showInfoToast(message: string, duration: number = 4000) {
    this.toastController.create({message, duration}).then(toast => toast.present());
  }

  private showErrorToast(message: string, duration: number = 8000) {
    this.toastController.create({message, duration, color: 'danger'}).then(toast => toast.present());
  }

  async initLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 999999
    });
  }

  async presentLoading() {
    if (this.loading) {
      await this.loading.present();
    }
  }

  async dismissLoading() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }

}
