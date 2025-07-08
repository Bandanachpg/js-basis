// block of code
{
//
}
//dry

// function function_name () {
    // function body
//}



// function_name = function_name();
//? function declaration
//function greet () {
  //  console.log("hello World");
//}

//greet();


//? function with parameters
// let name = "Hari";
//function greet(name,age) {
 //   console.log("hello", name, age);
//}
//console.log(name);
//greet("Hari",12);
//greet("Sita", 15);
//greet();

// ? default parameters
//function greet(name = "Guest", age = "20") {
 //   console.log("hello", name, age);
//}
//greet("Hari", 12);
//greet("Sita", 15);
//greet();

//function greet(user) {
    //console.log("hello",user.name);
//}
//const user ={
   //name: "Hari",
//};
//greet(user);

 //funtion with return type

 //function add (a, b) {
    //let sum= a + b;
 //return sum;
//}


//const result = add(20,30);
//console.log(result); 


//function product (a = 0, b = 0) {
 //  let product = a * b;
   //return product;
//}


const result = product(20,30);
console.log(result);
console.log(product());

// function expression
// anonymous function
const div = function (a,b)
{
    return a / b;
}
console.log(div(20,10));

//let modulus = function (a, b)
//{
 //   return a % b;
//};

//console.log(modulus(20,10));

// arrow function
const modulus = (a, b) => {
    return a % b;
}
console.log(modulus(20,10));

let greet = (name)=>{
    console.log("hello",name);
};
greet("sita");

function greet(name) {
    console.log("Hello, " + name);
}

function processUserInput(callback) {
    const name = "Bandana";
    callback(name); // calling greet as a callback
}

processUserInput(greet);
