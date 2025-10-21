// function inchToFeet(inch){
//     const feet = inch /12;
//     const feetNumber = parseInt(feet);
//     const moreInch = inch %12;
//     const adding = `${feetNumber} Feet ${moreInch} Inch`;
//     return adding;
// }

// const result = inchToFeet(75);
// console.log(result)

// function mileToKilo(mile){
//     const kilo = mile *1.6;
//     return kilo;
// }
// const result = mileToKilo(34);
// console.log(result.toFixed(2));

// function isLeapYear(year){
//     if(year%4===0 && year%400===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const result = isLeapYear(3000);
// console.log(result)

// function oddAverage(numbers){
//     let oddNum = [];
//     for(const num of numbers){
//         if(num%2===1){
//             oddNum.push(num);
//             // console.log(oddSum);
//         }
        
//     }
//     // return oddNum;
//     let sum = 0;
//     for(const number of oddNum){
//         sum = sum + number;
//     }
//     const count = oddNum.length;
//     const avg = sum / count;
//     return avg;
// }

// const numbers = [2,34,56,3,8,7];
// const avg = oddAverage(numbers);
// console.log(avg);

const briyaniKhor = ["abul", "babul","daul","abul","chabul","babul"];

const numbers = [1,2,3,2,3,4,6,7,7];


// function noDuplicate(array){
//     let unique = [];
//     for(const item of array){
//         if(unique.includes(item)===false){
//             unique.push(item);
//         }
//     }
//  return unique;
// }

// const noDup = noDuplicate(briyaniKhor);
// console.log(noDup);

// function noDupli(array){
//     let unique = [];
//     for(const num of array){
//         if(unique.includes(num)===false){
//             unique.push(num);
//         }
//     }
//     return unique;
// }
// const noDup = noDupli(numbers);
// console.log(noDup);


// let a = 5;
// let b = 7;
// console.log(a,b);

// const temp = a;

// a = b;
// b = temp;
// console.log(a,b)

// const jim = 100;
// const tim = 89;
// const kim = 68;
// if(jim>tim && jim>kim){
//     console.log("jim is the boss")
// }

// else if(tim>jim && tim>kim){
//     console.log("kim")
// }
// else{
//     console.log("kim")
// }

// const heights = [65,66,75,45,66,43];

// function getMax(numbers){
//     let max = numbers[0];
//     for(const num of numbers){
//         if(num>max){
//             max=num;
//         }
//     }
//     return max;
// }

// const max = getMax(heights);
// console.log(max)


// function woodQuantity(chair,table,bed){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const ChairTotalWood = chair * perChairWood;
//     const tableTotalWood = table * perTableWood;
//     const bedTotalWood = bed * perBedWood;

//     const totalWood = ChairTotalWood + tableTotalWood + bedTotalWood;

//     return totalWood;
// }

// const wood = woodQuantity(2,3,4);
// console.log(wood)

// const prices = [10000,23333,45000,65544,3322,3432];
// function getMin(numbers){
//     let min = numbers[0]
//     for(const num of numbers){
//         if(num<min){
//             min = num;
//         }
//     }
//     return min;
// }
// const cheap = getMin(prices);
// console.log(cheap);

// const mobile = [
//     {name: "samsu",price:20000,camera:"12mp",color: "green"},
//     {name: "amsu",price:90000,camera:"12mp",color: "black"},
//     {name: "tamsu",price:60000,camera:"12mp",color: "blue"},
//     {name: "kamsu",price:30000,camera:"12mp",color: "low"},
//     {name: "pamsu",price:10000,camera:"12mp",color: "red"},
// ];

//     function getHighPrice(phones){
//       let highp = phones[0];
//         for(const phone of phones){
//             if(phone.price>highp.price){
//                 highp = phone;
//             }
//         }
//         return highp;
//     }
//     const high = getHighPrice(mobile);
//     console.log(high);





// function getCheapestPhone(phones){
//     let min = phones[0];
// for(const phone of phones){
//     if(phone.price<min.price){
//         min = phone;
//     }
// }
// return min;
// }
// const cheap = getCheapestPhone(mobile);
// console.log(cheap);


// const products = [
//     {name: "shampo",price:300,quantity: 2},
//     {name: "shampo",price:600,quantity: 1},
//     {name: "shampo",price:200,quantity: 3},
//     {name: "shampo",price:400,quantity: 2},
//     {name: "shampo",price:300,quantity: 5},

// ];

// function cartTotal(products){
//     let total = 0;
//     for(const product of products){
//         const thisitemCost = product.price * product.quantity;
//         console.log(thisitemCost);
//         total +=thisitemCost;
        
//     }
//     return total;
// }

// const shoppingCart = cartTotal(products);
// console.log(shoppingCart);

// function discountedPrice(quantity){
//     if(quantity<=100){
//         const total = quantity * 100;
//         return total;
//     }
//     else if(quantity<=200){
//         const total = quantity * 90;
//         return total;
//     }
//     else{
//         const total = quantity * 70;
//         return total;
//     }
// }
// const dis = discountedPrice(110)
// console.log(dis)


// function layeredDiscounTotl(quantity){
//     const first100Price = 100;
//     const second100Price = 90;
//     const above200Price = 70;

//     if(quantity<=100){
//         const total = quantity * first100Price;
//         return total;
//     }
// else if(quantity<=200){
//     const first100total = 100 * first100Price;
//     const remainingQuantity = quantity - 100;
//     const remainingTotal = remainingQuantity * second100Price;

// 


function calculator(a,b,operation){
    if(operation==="add"){
        const result = a + b;
        return result;
    }

    else if(operation==="subtract"){
        const result = a -b;
        return result;
    }
    else if(operation==="multiply"){
        const result = a*b;
        return result;
    }
    else if(operation==="devide"){
        const result = a/b;
        return result;
    }

    else if(operation==="modulus"){
        const result = a%b;
        return result;
    }

}

const calc = calculator(2,3,'');
console.log(calc)












// function getShoppingTotal(products){
//     let total = 0;
//     for(const product of products){
//        total = total + product.price;
//     }
//     return total;
// }
// const total = getShoppingTotal(products);
// console.log("Total is",total);