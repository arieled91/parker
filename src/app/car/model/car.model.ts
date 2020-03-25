import * as moment from 'moment';
import {Storable} from '../../common/storage.service';

export class Car implements Storable{
    constructor(
        public id: string = null,
        public name: string = null,
        public modified: number = moment().unix(),
        public brand?: string,
        public model?: string,
        public description?: string,
        public location?: CarLocation,
    ) {
    }
}

export class CarLocation {
    constructor(
        public lat: number,
        public lon: number,
        public description?: string,
        public address?: string,
    ) {
    }
}

export const carComparer = (a: Car, b: Car) =>
  a.modified ? b.modified - a.modified : // last updated first
    a.name ? a.name.localeCompare(b.name) : // then by name
      0;
