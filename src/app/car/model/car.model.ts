export class Car {
    constructor(
        public id: string = null,
        public name: string = null,
        public brand?: string,
        public model?: string,
        public description?: string,
        public location?: Location
    ) {
    }
}

export class Location {
    constructor(
        public lat: string,
        public lon: string,
        public address: string,
        public description: string
    ) {
    }
}
