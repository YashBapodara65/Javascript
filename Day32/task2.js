class Laptop {

    constructor(brand, model, price)
    {
        this.brand = brand,
        this.model = model,
        this.price = price
    }

    showDetail(lbrand, lmodel, lprice){
        console.log(`my laptop brand is ${lbrand}`);
        console.log(`my laptop model is ${lmodel}`);
        console.log(`my laptop price is ${lprice}`);
    }

}

let myLaptop = new Laptop();
myLaptop.showDetail('Dell','XPS 15',1500);