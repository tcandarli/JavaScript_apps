class OrderItem {
    constructor(
        count,
        type
    ) {
        this.orderItemId = new this.getUniqueId;
        this.count = count;
        this.type = type;

    }

    getUniqueId() {
        return new Date().getTime() - Math.floor(Math.random() * 1000);
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