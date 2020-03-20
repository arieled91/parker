import {adapter, CarState} from './car.reducer';
import {AppState} from '../../store';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const {
  selectIds,
  selectAll,
  selectEntities
} = adapter.getSelectors();


export const selectCarState = createFeatureSelector<AppState, CarState>('cars');

export const getAllCars = selectAll;
export const getCarById = selectIds;
export const getCarEntities = selectEntities;
export const getSelectedDeviceId = (state: CarState) => state.selectedCarId;


export const selectAllCars = createSelector(
  selectCarState,
  getAllCars
);

export const selectCarById = createSelector(
  selectCarState,
  getCarById
);

export const selectCarEntities = createSelector(
  selectCarState,
  getCarEntities
);


export const selectCurrentCarId = createSelector(
  selectCarState,
  getSelectedDeviceId
);

export const selectCurrentCar = createSelector(
  selectCarEntities,
  selectCurrentCarId,
  (entities, selectedId) => entities && entities[selectedId]
);
