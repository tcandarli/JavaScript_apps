class Extra {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.extraId = new Date.getTime();
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getId() {
        return this.extraId;
    }

}