function makeTea(typeOfTea){
    return `making ${typeOfTea} `
}
// console.log(makeTea("green tea"))

function orderTea(teaType){
    function confirmOrder(){
        return `order confirmed for chai`
    }
    return confirmOrder()
}
// console.log(orderTea("chai"))

// arrow functions =>

const calculateFunction = (price, quantity) =>{
    return price * quantity
}
let totalCost = calculateFunction(50, 5)
// console.log(totalCost)

function processTeaOrder(order) {
    function makeTea(order) {
        return order + " is good";
    }
    return makeTea(order);
}

console.log(processTeaOrder("tea"));
