class Car {

    constructor(pRacer) {
        this.location = null;
        this.color = "#" + Math.round(Math.random() * 0XFFFFFF).toString(16);
        this.racer = pRacer;
        this.size = 100;
        this.acceleration = Math.random()*1;
        this.velocity = Math.random()*10;
    }

    getLocation(){
        return this.location;
    }

    setLocation(pLocation) {
        this.location = pLocation;
    }

    getColor() {
        return this.color;
    }

    setColor(pColor) {
        this.color = pColor;
    }

    getRacer() {
        return this.racer;
    }

    setRacer(pRacer) {
        this.racer = pRacer;
    }

    getSize() {
        return this.size;
    }

    move() {
        this.location.left += this.velocity + this.velocity * this.acceleration;
    }
}