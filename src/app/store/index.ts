import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {CarState} from '../car/store/car.reducer';
import {CarEffects} from '../car/store/car.effect';
import {carReducer} from '../car/store/car.reducer';

// Add all state interfaces here
export interface AppState {
  cars: CarState;
}

// Add all reducers interface here
export const reducers: ActionReducerMap<AppState> = {
  cars: carReducer
};

// Add all effects here
export const effects = [CarEffects];

export const metaReducers: MetaReducer<AppState>[] =
  !environment.production ? [] : [];
