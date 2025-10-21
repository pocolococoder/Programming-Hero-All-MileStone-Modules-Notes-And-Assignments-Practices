const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reversed = [];
for(const color of colors){
    console.log(color);
    reversed.unshift(color);
}
console.log(reversed)

const numbers = [12, 98, 5, 41, 23, 78, 46];

let even = [];
for(const num of numbers){
    if(num%2===0){
        even.push(num);
    }
}
console.log(even);

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

var concate = "";
for(const num of numbers){
  concate +=num;
    
}
console.log(concate);

let statement = 'I am a hard working person';

let words = statement.split(" ");
let reversed = words.reverse();
let result = reversed.join(" ");
console.log(result);

let number = [1,2,3];
let copy = [...number];


copy[0]=99;
console.log(copy)

let students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
];

let name1 = students[0].name;
let marks1 = students[0].marks;
let name2 = students[1].name;
let marks2 = students[1].marks;

let concate1 = `${name1}  scored  ${marks1}`;
let concate2 = `${name2} scored ${marks2}`;
console.log(concate1);
console.log(concate2);


let input = [
  [1, 2],
  [3, 4],
  [5, 6]
]

input[1][0]= 99;
console.log(input)