import {Action} from '@ngrx/store';
import {Car} from '../model/car.model';

export enum CarActionType {
  SELECT_CAR = '[Car Action] Select car',
  LOAD_CAR = '[Car Action] Load car',
  LOAD_CAR_SUCCESS = '[Car Action] Load car success',
  CREATE_CAR = '[Car Action] Create car',
  CREATE_CAR_SUCCESS = '[Car Action] Create car success',
  DELETE_CAR = '[Car Action] Delete car',
  DELETE_CAR_SUCCESS = '[Car Action] Delete car success',
  UPDATE_CAR = '[Car Action] Delete car',
  UPDATE_CAR_SUCCESS = '[Car Action] Delete car success'
}

export class SelectCar implements Action {
  readonly type = CarActionType.SELECT_CAR;

  constructor(public payload: { id: string }) {
  }
}

export class LoadCar implements Action {
  readonly type = CarActionType.LOAD_CAR;

  constructor(public payload: { id: string }) {
  }
}

export class LoadCarSuccess implements Action {
  readonly type = CarActionType.LOAD_CAR_SUCCESS;

  constructor(public payload: Car) {
  }
}

export class CreateCar implements Action {
  readonly type = CarActionType.CREATE_CAR;

  constructor(public payload: Car) {
  }
}

export class CreateCarSuccess implements Action {
  readonly type = CarActionType.CREATE_CAR_SUCCESS;

  constructor(public payload: Car) {
  }
}

export class DeleteCar implements Action {
  readonly type = CarActionType.DELETE_CAR;

  constructor(public payload: Car) {
  }
}

export class DeleteCarSuccess implements Action {
  readonly type = CarActionType.DELETE_CAR_SUCCESS;

  constructor(public payload: Car) {
  }
}

export class UpdateCar implements Action {
  readonly type = CarActionType.UPDATE_CAR;

  constructor(public payload: Car) {
  }
}

export class UpdateCarSuccess implements Action {
  readonly type = CarActionType.UPDATE_CAR_SUCCESS;

  constructor(public payload: Car) {
  }
}

export type CarAction =
  CreateCar
  | CreateCarSuccess
  | DeleteCar
  | DeleteCarSuccess
  | SelectCar
  | LoadCar
  | LoadCarSuccess
  | UpdateCar
  | UpdateCarSuccess;
