let game = {
    name: "BGMI",
};
let player = {
    player: "jonny",
};

Object.setPrototypeOf(player, game)
// console.log(Object.getPrototypeOf(player));

// constructor function

function Car(make, model){
    this.make=make;
    this.model=model;
}

// console.log(new Car("Toyota", "Hylux"))
// console.log(new Car("Kia", "Seltos"))

// constructor functions used normal functions not an arrow functions..
function Tea(type){
    this.type = type;
    this.newfun= function(){
        return (`the type of tea is ${type}`)
    }
} 
// let myTea= new Tea("Lemon Tea");
// console.log(myTea.newfun());

// console.log(new Tea("Lemon").newfun())

//