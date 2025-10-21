// function fanOffKor(){
//     console.log("fan off kor re");
//     console.log("Fast off kor");
//     console.log("Koi jaiss jaaa")
// }

// fanOffKor();

// function square(num){
//     let squareResult = num* num;
//     return squareResult;
// }

// const result = square(4);
// console.log(result);

// function add(a,b){
//     let adding = a + b;
//     return adding;
// }

// let result = add(5,5);
// console.log(result);

// function tenTimes (num){
//     const result = num*2;
//     return result;
// }

// const result = tenTimes(10);
// console.log(result);


// function isEven(number){
//     if(number%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const result = isEven(5);
// const result1 = isEven(110)
// console.log(result,result1);

// function evenSizedString(str){
//     const size = str.length;
//     if(size%2===0){
//         return "Even";
//     }
//     else{
//         return "false";
//     }
// }

// const result = evenSizedString("Dhaka");
// console.log(result)

// function doubleOrTripple(number,doDouble){
//     if(doDouble){
//         const result = number *2;
//         return result;
//     }
//     else{
//         const result = number * 3;
//         return result;
//     }
// }

// const final = doubleOrTripple(2,true);
// console.log(final)

function sumOfNumbers(number){
    let Sum = 0;
    for(const num of number){
        if(num%2===0){
            Sum = Sum + num;
        }
          
    }
    return Sum;


}
const sum = sumOfNumbers([2,4,2,6,8,9]);
console.log(sum);