let vehicle = {
    id: 01,
    vehiclebrand: "audi",
    model: "AudiA6",
    Varient: "premium",
    specification: {
        firstgear: function() {console.log("Vehicle is in the first gear")},
        Secondgear: function(){ console.log("Vehicle is in the second gear")},
        maxspeed: 56,
        changegear: function() {
            this.firstgear() + ' ' + this.Secondgear();
        }
    }
}
 console.log(vehicle.id);
 console.log(vehicle.vehiclebrand);
 console.log(vehicle.model);
 console.log(vehicle.Varient);
 console.log(vehicle.specification.maxspeed);
vehicle.specification.changegear();
