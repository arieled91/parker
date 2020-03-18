import { Action } from '@ngrx/store';
import { Car } from '../../car/model/car.model';

export enum ActionTypes {
  CreateCar = '[Car Service] Create car',
  DeleteCar = '[Car Service] Delete car'
}

export class CreateCar implements Action {
  readonly type = ActionTypes.CreateCar;

  constructor(public payload: { car: Car }) {}
}

export class DeleteCar implements Action {
  readonly type = ActionTypes.DeleteCar;

  constructor(public payload: { car: Car }) {}
}

export type ActionsUnion = CreateCar | DeleteCar;
