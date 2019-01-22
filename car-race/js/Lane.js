class Lane {

    constructor(pCar) {
        this.car = pCar;
        this.size = 100;
    }

    getCar(){
        return this.car;
    }

    setCar(pCar){
        this.car = pCar;
    }

    getSize(){
        return this.size;
    }

    setSize(pSize) {
        this.size = pSize;
    }

}