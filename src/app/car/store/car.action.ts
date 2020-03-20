import {Action} from '@ngrx/store';
import {Car} from '../model/car.model';

export enum CarActionType {
  SELECT_CAR = '[Car Service] Select car',
  LOAD_CAR = '[Car Service] Load car',
  LOAD_CAR_SUCCESS = '[Car Service] Load car success',
  CREATE_CAR = '[Car Service] Create car',
  CREATE_CAR_SUCCESS = '[Car Service] Create car success',
  DELETE_CAR = '[Car Service] Delete car',
  DELETE_CAR_SUCCESS = '[Car Service] Delete car success'
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

export type CarAction = CreateCar | CreateCarSuccess | DeleteCar | DeleteCarSuccess | SelectCar | LoadCar | LoadCarSuccess;
