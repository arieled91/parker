import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from '../model/car.model';
import * as uuid from 'uuid';
import {getAllCars, getCarById} from '../../state/selectors/car.selector';
import {AppState} from '../../state/reducers';
import {Store} from '@ngrx/store';
import * as CarActions from '../../state/actions/car.actions';

@Injectable({
    providedIn: 'root'
})
export class CarStoreService {

    private cars: Observable<Car[]>;

    constructor(private store: Store<AppState>) {
        this.cars = this.store.select(getAllCars);
    }


    public insert(newCar: Car): void {
        const id: string = uuid.v4();
        const car = {...newCar, id: id};

        this.store.dispatch(new CarActions.CreateCar({ car: car }));
    }




    public find(id: string): Observable<Car> {
        return this.store.select(getCarById, {
            id: id
        });
    }

    public findAll(): Observable<Car[]> {
        return this.store.select(getAllCars);
    }

    // public update(updatedCar: Car): Observable<Car> {
    //     return this.state.pipe(
    //         take(1),
    //         tap(cars => {
    //             const updateCars: Car[] = [...cars];
    //             const carIndex = updateCars.findIndex(storedCar => storedCar.id === updatedCar.id);
    //             if (carIndex < 0) {
    //                 throw throwError(`Car id "${updatedCar.id}" not found`);
    //             }
    //             updateCars[carIndex] = updatedCar;
    //         }),
    //         map(() => updatedCar)
    //     );
    // }

    // public save(car: Car): Observable<Car> {
    //     return car.id ? this.update(car) : this.insert(car);
    // }

    delete(car: Car): void {
        this.store.dispatch(new CarActions.DeleteCar({ car: car }));
    }
}
