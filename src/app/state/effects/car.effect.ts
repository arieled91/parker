import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {tap} from 'rxjs/operators';
import {ActionTypes} from '../actions/car.actions';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class CarEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}

  @Effect({dispatch: false})
  public createCar$: Observable<Action> = this.actions$.pipe(
    ofType( ActionTypes.CreateCar ),
    // tap(),
    tap( () => this.router.navigate(['/']) )
  );
}
