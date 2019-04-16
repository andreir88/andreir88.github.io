var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 1341
    };

function prequel(car) {
    if (taxi.mileage > 10000) {
        return false;
}else if (taxi.year > 1960) {
        return false;
}
    return true;
}

var worthAlook = prequel(taxi);

if (worthAlook) {
    console.log("Check out this " + taxi.year + " " + taxi.make);
}else { 
    console.log("You should pass on this " + taxi.make)
}
