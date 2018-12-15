class Location {
    constructor(pLeft, pTop) {
        this.x = pLeft;
        this.y = pTop;
    }

    toString() {
        return this.x + "," + this.y
    }
    getLeft() {
        return this.x;
    }
    getTop() {
        return this.y;
    }
}