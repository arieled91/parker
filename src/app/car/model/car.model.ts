import * as moment from 'moment';

export class Car {
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
        public lat: string,
        public lon: string,
        public address: string,
        public description: string
    ) {
    }
}
