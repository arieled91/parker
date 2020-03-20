import * as fromCar from './car.action';
import {Car} from '../model/car.model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export interface CarState extends EntityState<Car> {
  data: Car[];
  loading: boolean;
  selectedCarId: string;
}

export const adapter: EntityAdapter<Car> = createEntityAdapter<Car>(
  {
    selectId: (car: Car) => car.id,
    sortComparer: (a: Car, b: Car) => a.name ? a.name.localeCompare(b.name) : a.id.localeCompare(b.id)
  }
);

export const initialState: CarState = adapter.getInitialState({
  data: [],
  loading: false,
  selectedCarId: null
});

export function reducer(state: CarState = initialState, action: fromCar.CarAction): CarState {
  switch (action.type) {
    case fromCar.CarActionType.CREATE_CAR:
      return {...state, loading: true};

    case fromCar.CarActionType.CREATE_CAR_SUCCESS:
      state = {...state, loading: false};
      return adapter.addOne(action.payload, state);

    case fromCar.CarActionType.DELETE_CAR_SUCCESS:
      state = {...state, loading: false};
      return adapter.removeOne(action.payload.id, state);

    case fromCar.CarActionType.LOAD_CAR_SUCCESS:
      state = {...state, loading: false};
      return adapter.addOne(action.payload, state);

    case fromCar.CarActionType.SELECT_CAR:
      state = {...state, loading: true};
      return {...state, selectedCarId: action.payload.id};

    default:
      return state;
  }
}
