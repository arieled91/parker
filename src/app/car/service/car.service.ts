import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {Car} from '../model/car.model';
import {map, take, tap} from 'rxjs/operators';
import * as uuid from 'uuid';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';
import {Platform} from '@ionic/angular';
import {DbService} from '../../db.service';

@Injectable({
    providedIn: 'root'
})
export class CarService {

    private dbName = 'Car';
    private state: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>([]);
    private selected: BehaviorSubject<Car>;


    constructor(
        public platform: Platform,
        private sqlite: SQLite,
        private dbService: DbService,
    ) {
        this.init();
    }


    init() {
        this.dbService.getDb(this.dbName).then((db: SQLiteObject) => {
                db.transaction(tx => {
                    tx.executeSql('CREATE TABLE IF NOT EXISTS Car (id, name, brand, model, description, location)');
                    // tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Alice', 101]);
                    // tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Betty', 202]);

                }).catch(error => console.log('Transaction ERROR: ' + error.message))
                    .then(() => console.log('Populated database OK'));
            }).catch(e => console.log(e));


    }

    public insert(newCar: Car): Observable<Car> {
        newCar.id = uuid.v4();


        return this.state.pipe(
            take(1),
            tap(cars => {
                this.state.next(cars.concat(newCar));
            }),
            map(() => newCar)
        );
    }


    public find(id: string): Observable<Car> {
        return this.state.pipe(
            take(1),
            map(cars => {
                return {...cars.find(p => p.id === id)};
            })
        );
    }

    public findAll(): Observable<Car[]> {
        return this.state.asObservable();
    }

    public update(updatedCar: Car): Observable<Car> {
        return this.state.pipe(
            take(1),
            tap(cars => {
                const updateCars: Car[] = [...cars];
                const carIndex = updateCars.findIndex(storedCar => storedCar.id === updatedCar.id);
                if (carIndex < 0) {
                    throw throwError(`Car id "${updatedCar.id}" not found`);
                }
                updateCars[carIndex] = updatedCar;
            }),
            map(() => updatedCar)
        );
    }

    public save(car: Car): Observable<Car> {
        return car.id ? this.update(car) : this.insert(car);
    }

    public select(car: Car) {
        this.selected.next(car);
    }

    public getSelected() {
        return this.selected;
    }
}
