class Order {
    constructor() {
        this.date = new Date();
        this.orderItems = [];
    }

    addItems(item) {
        this.orderItems.push(item);
    }

    getPrice() {
        return this.orderItems.reduce((sum, curr) => {
            sum += curr.getPrice();
            return sum;
        }, 0);

    }
}