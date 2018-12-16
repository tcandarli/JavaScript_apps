class BeverageFactory {

    getCola() {
        return new BeverageFactory("Cola", 4);
    }
    getSprite() {
        return new BeverageFactory("Sprite", 3);
    }
    getRivella() {
        return new BeverageFactory("Rivella", 4);
    }

}