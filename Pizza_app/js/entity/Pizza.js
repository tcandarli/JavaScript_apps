class Pizza {
    constructor(name, price, size) {
        this.pizzaId = new Date.getTime();
        this.name = name;
        this.price = price;
        this.size = size;
        this.extras = [];
    }

    addExtra(item) {
        this.extras.push(item);
    }

    getExtraPrice() {
        return this.extras.reduce((sum, curr) => {
            sum += curr.getPrice();
            return sum;
        }, 0);
    }

    getPrice() {
        return this.price + this.getExtraPrice();
    }
    getName() {
        return this.name;
    }
    getSize() {
        return this.size;
    }

}