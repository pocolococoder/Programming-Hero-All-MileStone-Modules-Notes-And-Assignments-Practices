const fruits = ["apple",'banana',"anar","watermelon","degli","coconat"];

// for(const fruit of fruits){
//     console.log(fruit);
// }

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// const numbers = [12,34,2,34,2,45];
// for(let i = 0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }

// let k = 0;
// while(k<fruits.length){
//     console.log(fruits[k]);
//     k++;
// }

// const prices = [12,34,21,23,232,1];
// let n = 0;
// while(n<prices.length){
//     console.log(prices[n]);
//     n++;
// }

const reversed = [];
const prices = [12,34,21,23,232,1];
for(let i = 0; i<prices.length;i++){
    console.log(prices[i]);
    reversed.unshift(prices[i])
}
console.log(reversed);