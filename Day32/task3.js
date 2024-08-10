class Laptop {

    constructor(brand, model, price)
    {
        this.brand = brand,
        this.model = model,
        this.price = price
    }

    showDetails(no, lbrand, lmodel, lprice){
        console.log(`Laptop ${no} :- ${lbrand}(brand), ${lmodel}(model), ${lprice}(price)`);
    }

}

let myLaptop = new Laptop();

myLaptop.showDetails(1,'Dell','XPS 15',37500);
myLaptop.showDetails(2,'HP','MT 11',35000);
myLaptop.showDetails(3,'Asus','A5',39500);
myLaptop.showDetails(4,'Asus Tuf','F15',79450);
myLaptop.showDetails(5,'Aser','A2',44150);
myLaptop.showDetails(6,'Lanevo','L6',34250);
myLaptop.showDetails(7,'HP','MT 15',64150);
myLaptop.showDetails(8,'HP','MT 15',64150);
myLaptop.showDetails(9,'Dell','XPS 11',30150);
myLaptop.showDetails(10,'Aser','A4',51050);