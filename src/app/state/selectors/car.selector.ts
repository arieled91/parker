import {CarState} from '../reducers/car.reducer';
import {AppState} from '../reducers';
import {createSelector} from '@ngrx/store';

export const findAllCars = (state: CarState) => state.data;
export const findCarById = (state: CarState, props: { id: string }) =>
  state.data.find(car => car.id === props.id);


export const getCarState = (state: AppState) => state.cars;

export const getAllCars = createSelector(
  getCarState,
  findAllCars
);

export const getCarById = createSelector(
  getCarState,
  findCarById
);
