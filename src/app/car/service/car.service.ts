import {Injectable} from '@angular/core';
import {Car} from '../model/car.model';
import {StorageService} from '../../common/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CarService extends StorageService<Car>{

  constructor() {
    super('cars');
  }
}
