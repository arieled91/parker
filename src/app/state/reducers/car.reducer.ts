import * as fromCar from '../actions/car.actions';
import {Car} from '../../car/model/car.model';

export interface CarState {
  data: Car[];
}

export const initialState: CarState = {
  data: []
};

export function reducer(
  state = initialState,
  action: fromCar.ActionsUnion
): CarState {
  switch (action.type) {
    case fromCar.ActionTypes.CreateCar: {
      return {
        ...state,
        data: [...state.data, action.payload.car]
      };
    }

    case fromCar.ActionTypes.DeleteCar: {
      return {
        ...state,
        ...state.data.splice(state.data.indexOf(action.payload.car), 1)
      };
    }

    default: {
      return state;
    }
  }
}
