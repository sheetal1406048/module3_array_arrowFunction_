function something(...num){
    return num;
}

var result = something(1,2,3,4,5,"A","B","C");
//console.log(result)

//for of Loop

var numbers = [10,20,30,40,50,60,70,80,9]

for(var items of numbers){
  //  console.log(items)
}

//for in loop

for(var i in numbers){
    //console.log(i,numbers[i])
}

var myObj = {
    name : {
        fName : "sheetal",
        lName : "Imtiaz"
    },
    age : 20,
    weight:100,
    height:120
}

//console.log(myObj["name"]["fName"])

for(var property in myObj){
  // console.log(property);
   // console.log(myObj)
   //console.log(myObj[property])
}


var myNumbers = new Array(1,2,3,4,5,6)
//console.log(myNumbers[3])

//Multi Dimensional Array

var numberSetA = [1,2,3];
var numberSetB = [4,5,6];
var numberSetC = [7,8,9];

var result = [numberSetA,numberSetB,numberSetC]

//console.log(result[1][2])


var numbers = [11,12,13,14,15]
var[a,,c] =numbers
console.log(a)

var [,b,,,e] =numbers
console.log(e)
//arrow Function **var variableName = (parameters) => {} 

//var myFunction =  (a) => {console.log(a)};
//myFunction(2)


var myArrow = (...x)=>{
    console.log(x)
}

//myArrow(1,2,3,4,5,6,7,8)

var newArrow = (a,b)=>{
    return a+b;
}

var result = newArrow(3,7)
//console.log(result)