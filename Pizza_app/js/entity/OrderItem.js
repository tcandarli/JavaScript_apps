class OrderItem {
    constructor(
        count,
        type
    ) {
        this.orderItemId = new Date().getTime();

    }

    getCount() {
        return this.count;
    }

    getType() {
        return this.type;
    }

    getPrice() {
        return this.type.getPrice() * this.getCount();
    }
}