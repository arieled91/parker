import * as fromCar from './car.action';
import {Car} from '../model/car.model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import * as moment from 'moment';

export interface CarState extends EntityState<Car> {
  data: Car[];
  loading: boolean;
  selectedCarId: string;
}

const carComparer = (a: Car, b: Car) =>
  a.modified ? b.modified - a.modified : // last updated first
    a.name ? a.name.localeCompare(b.name) : // then by name
      a.id.localeCompare(b.id); // by id as last resource

export const adapter: EntityAdapter<Car> = createEntityAdapter<Car>(
  {
    selectId: (car: Car) => car.id,
    sortComparer: carComparer
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
      state = {...state, loading: false, selectedCarId: action.payload.id};
      return adapter.addOne(action.payload, state);

    case fromCar.CarActionType.UPDATE_CAR:
      return {...state, loading: true};

    case fromCar.CarActionType.UPDATE_CAR_SUCCESS:
      state = {...state, loading: false};
      return adapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state);

    case fromCar.CarActionType.DELETE_CAR_SUCCESS:
      state = {...state, loading: false};
      return adapter.removeOne(action.payload.id, state);

    case fromCar.CarActionType.LOAD_CAR_SUCCESS:
      state = {...state, loading: false};
      return adapter.addOne(action.payload, state);

    case fromCar.CarActionType.SELECT_CAR:
      state = {...state, loading: false};
      return {...state, selectedCarId: action.payload.id};

    default:
      return state;
  }
}
