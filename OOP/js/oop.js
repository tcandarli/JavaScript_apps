class Shape{
    constructor(color){
        this.color = color;
    }

    toString(){return this.color;}
    getArea(){
        return null;
    }
}

class Rectangle extends Shape{
    constructor(color, width, height){
        super(color);
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }
}

class Circle extends Shape{
    constructor(color, dimater){
        super(color);
        this.dimater = dimater;
    }

    getArea(){
        return Math.PI * Math.pow(this.dimater, 2);
    }
}


let kumbara = [];
kumbara.push(new Rectangle("green", 200, 200));
kumbara.push(new Rectangle("blue", 100, 200));
kumbara.push(new Rectangle("red", 200, 500));
kumbara.push(new Rectangle("black", 40, 300));

kumbara.push(new Circle("yellow", 50));
kumbara.push(new Circle("red", 100));
kumbara.push(new Circle("brown", 200));

kumbara.forEach((shape) => console.log(shape.color, shape.getArea()));