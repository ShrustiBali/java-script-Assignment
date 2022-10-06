const vechicle={
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
   
    };
   const vechicleDetials = (vechicle)=>
   { console.log(vechicle.id);
    console.log(vechicle.vehiclebrand);
    console.log(vechicle.model);
    console.log(vechicle.Varient);
    console.log(vechicle.specification.maxspeed);
   }
   vechicleDetials(vechicle);
