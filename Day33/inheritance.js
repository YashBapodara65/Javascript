class Cars {

    constructor(wheel,door){
        this.wheel = wheel,
        this.door = door
    }

}

class innerCar1 extends Cars{

    constructor(wheel,door,brand,model,color,price)
    {
        super(wheel,door)
        this.brand = brand,
        this.model = model,
        this.color = color,
        this.price = price
    }

}

let c1 = new Cars(4,2);
console.log(c1);

let inc1 = new innerCar1(4,2,'Zxi+','Maruti Sizuki','Silver',1140000);
console.log(inc1);