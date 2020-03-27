import {createAction, props} from '@ngrx/store';
import {Car} from '../model/car.model';

export const selectCar = createAction(
  '[Car Action] Select car',
  props<{id: string}>()
);

export const loadAllCars = createAction(
  '[Car Action] Load all cars'
);

export const loadAllCarsSuccess = createAction(
  '[Car Action] Load all cars success',
  props<{cars: Car[]}>()
);

export const loadCar = createAction(
  '[Car Action] Load car',
  props<{id: string }>()
);

export const loadCarSuccess = createAction(
  '[Car Action] Load car success',
  props<{car: Car}>()
);


export const createCar = createAction(
  '[Car Action] Create car',
  props<{car: Car}>()
);

export const createCarSuccess = createAction(
  '[Car Action] Create car success',
  props<{car: Car}>()
);

export const deleteCar = createAction(
  '[Car Action] Delete car',
  props<{car: Car}>()
);

export const deleteCarSuccess = createAction(
  '[Car Action] Delete car success',
  props<{car: Car}>()
);

export const updateCar = createAction(
  '[Car Action] Update car',
  props<{car: Car}>()
);

export const updateCarSuccess = createAction(
  '[Car Action] Update car success',
  props<{car: Car}>()
);

export const carActionFail = createAction(
  '[Car Action] - Fail',
  props<Error>()
);
