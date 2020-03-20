import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import * as fromCar from '../car/store/car.reducer';
import {CarEffects} from '../car/store/car.effect';

// Add all state interfaces here
export interface AppState {
  cars: fromCar.CarState;
}

// Add all reducers interface here
export const reducers: ActionReducerMap<AppState> = {
  cars: fromCar.reducer
};

// Add all effects here
export const effects = [CarEffects];

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [] : [];
