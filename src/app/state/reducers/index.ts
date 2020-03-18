import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromCar from './car.reducer';

export interface AppState {
  cars: fromCar.CarState;
}

export const reducers: ActionReducerMap<AppState> = {
  cars: fromCar.reducer
};

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [] : [];
