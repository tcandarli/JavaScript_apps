class Order {
    constructor(){
        this.date = new Date();
        this.orderItems = [];
    }

    addItems(item) {
        this.orderItems.push(item);
    }

    getPrice() {
        
    }
}