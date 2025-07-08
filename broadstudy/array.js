// key value
// indexed type
// list
//[]

//const user1 = 'abc'
//const user2 = 'abc'
//const user3 = 'abc'
//const user4 = 'abc'
const users = ["user1", "user2", "user3", "user4"]
//const user = [{},{}, {}, {}]

const numbers = [1, 2, 3, 4, 5, 6];


//const firstEl = numbers[0];
//console.log(firstEl);
//console.log(numbers[1]);

//push adds data to the end of the array
//numbers.push(1,23);
//console.log(numbers);

//? from beginning unshift()
numbers.unshift(7,8,9,10);
console.log(numbers);

//pop removes the last element from the array
console.log(numbers.pop(2));
console.log(numbers);

delete numbers[0];
console.log(numbers);

console.log(numbers.length); // length of the array