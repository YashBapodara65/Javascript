let car = {
    "brand" : "Toyota", 
    "model" : "Corolla", 
    "year" : 2022,
    drive : function(brand,model){
        console.log("Driving " +brand +" " +model);
    }
};

car.drive(car.brand,car.model);