import * as actions from './car.action';
import {Car, carComparer} from '../model/car.model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Action, createReducer, on} from '@ngrx/store';

export interface CarState extends EntityState<Car> {
  data: Car[];
  loading: boolean;
  selectedCarId: string;
  carError: Error;
}

export const adapter: EntityAdapter<Car> = createEntityAdapter<Car>(
  {
    selectId: (car: Car) => car.id,
    sortComparer: carComparer
  }
);

export const initialState: CarState = adapter.getInitialState({
  data: [],
  loading: false,
  selectedCarId: null,
  carError: null
});

const reducer = createReducer(
  initialState,
  on(actions.createCar, state => {
    return {...state, loading: true};
  }),
  on(actions.createCarSuccess, (state, action) => {
    state = {...state, loading: false};
    return adapter.addOne(action.car, state);
  }),
  on(actions.updateCar, state => {
    return {...state, loading: true};
  }),
  on(actions.updateCarSuccess, (state, action) => {
    state = {...state, loading: false};
    return adapter.updateOne({
      id: action.car.id,
      changes: action.car
    }, state);
  }),
  on(actions.deleteCar, state => {
    return {...state, loading: true};
  }),
  on(actions.deleteCarSuccess, (state, action) => {
    state = {...state, loading: false};
    return adapter.removeOne(action.car.id, state);
  }),
  on(actions.loadCarSuccess, (state, action) => {
    state = {...state, loading: false};
    return adapter.addOne(action.car, state);
  }),
  on(actions.selectCar, (state, action) => {
    state = {...state, loading: false};
    return {...state, selectedCarId: action.id};
  }),
  on(actions.loadAllCars, state => {
    return {...state, loading: true};
  }),
  on(actions.loadAllCarsSuccess, (state, action) => {
    state = {...state, loading: false};
    return adapter.addAll(action.car, state);
  }),
  on(actions.carActionFail, (state, error) => {
    console.log(error);
    return {...state, carError: error}
  })
);

export function carReducer(state: CarState | undefined, action: Action) {
  return reducer(state, action);
}
