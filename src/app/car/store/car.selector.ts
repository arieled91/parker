import {adapter, CarState} from './car.reducer';
import {AppState} from '../../store';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const {
  selectIds,
  selectAll,
  selectEntities,
  selectTotal
} = adapter.getSelectors();

export const selectCarState = createFeatureSelector<AppState, CarState>('cars');
export const getSelectedCarId = (state: CarState) => state.selectedCarId;

export const selectAllCars = createSelector(
  selectCarState,
  selectAll
);

export const selectCarById = createSelector(
  selectCarState,
  selectIds
);

export const selectCarEntities = createSelector(
  selectCarState,
  selectEntities
);


export const selectCurrentCarId = createSelector(
  selectCarState,
  getSelectedCarId
);

export const selectCurrentCar = createSelector(
  selectCarEntities,
  selectCurrentCarId,
  (entities, selectedId) => entities && entities[selectedId]
);

export const selectCarTotal = createSelector(
  selectCarState,
  selectTotal
);
