// print count form 5 to 1 and sore it in array

let n=5
let countdown=[];

while(n>0){
    countdown.push(n)
    n--
}
// console.log(countdown)

//do while loop -- user to enter their favorite tea type until they type "stop". Store it in a array

let teaCollection = []
let tea
do{ 
    tea = prompt(`Hey Buddy please enter your favorite tea type. type "stop" for end.`)
    if(tea !=="stop"){
        teaCollection.push(tea)
}
}
while(tea !== "stop")
// console.log(teaCollection)
//run on browser 


let cities= ["paris","london","mumbai","pune"]
let citislist = []

for (let i=0; i<cities.length; i++){
    citislist.push(cities[i])
}
// console.log(citislist);


let teatype = ["green tea", "black tea","abc","xyz", "chai", "oolong tea"]
let selectedTea = []
for (let i=0; i<teatype.length;i++){
    if (teatype[i]==="chai"){
        break
    } 
    selectedTea.push(teatype[i])
    
}

// console.log(selectedTea);

let citiess= ["paris","london","mumbai","pune"]
let visitedcities =[]

for (let i =0; i<citiess.length;i++){
    if (citiess[i]==="mumbai"){
            continue
    }else{
        visitedcities.push(citiess[i])
    }
}
// console.log(visitedcities)

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}