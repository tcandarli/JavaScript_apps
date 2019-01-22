class RacePiste {

    constructor(pStartLocation, pFinishLocation) {
        this.startLocation = pStartLocation;
        this.finishLocation = pFinishLocation;
        this.cars = [];
        this.lanes = [];
    }

    addToRace(pCar) {

        const lane = new Lane(pCar);
        this.lanes.push(lane);

        let x = this.startLocation.left;
        let y = this.startLocation.top + this.cars.length * lane.getSize();
        pCar.setLocation(new Location(x, y));

        this.cars.push(pCar);
    }

    getLanes() {
        return this.lanes;
    }

    getCars() {
        return this.cars;
    }

    getFinishLocation() {
        return this.finishLocation;
    }

    init(){
        // Initialize the race
        this.cars = [];
        this.lanes = [];
    }

    refresh(){
        this.cars.forEach((pCar) => {
            pCar.move();

        });
    }
}