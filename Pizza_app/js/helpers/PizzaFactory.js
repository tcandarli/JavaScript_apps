class PizzaFactory {

    getMargaritha() {
        return new Pizza("margharita", 16, 26);
    }
    getquatreformaggie() {
        return new Pizza("quatreformaggie", 16, 26);
    }
    getFunghi() {
        return new Pizza("Funghi", 16, 26);
    }
    getProschutto() {
        return new Pizza("Proschutto", 16, 26);
    }
}