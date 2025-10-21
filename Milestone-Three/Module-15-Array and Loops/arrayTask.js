const numbers = [12,34,2,3,4,3];
console.log(numbers);

for(const num of numbers){
    console.log(num)
}

const fruits = ['orange',"apple","malta","jam"]
for(const fruit of fruits){
    console.log(fruit)
}


if(number<10){
    console.log("choto ekta number paisi")
}
else{
    console.log("gg")
}


let number = 0;
while(number<5){
    console.log("looping",number)
    number= number + 1;
}

let num = 1;
let sum = 0;
while(num<=10){
    console.log("Num is",num);
    sum = sum + num;
    console.log(sum)
    num++;
}

let num = 1; //loop variable
while(num<=10){ //loop condition
    if(num%2==0){
        console.log("even num",num) //loop statement
    }
    num++; //loop variable change
}

for(let num = 0;num<=5;num++){
    console.log(num)
}

for(let i = 0; i<=10;i++){
    if(i%2==0){
        console.log("Even num",i)
    }
}

let sum = 0;
for(let i = 0;i<=20;i++){
    sum+=i;
    console.log(sum);
}

for(let i = 10;i>=0;i--){
    console.log("num",i)
}

for(let i =20;i>=11;i--){
    console.log("num",i)
}

let i = 20;
while(i>=11){
    console.log(i);
    i--;
}

for(let i = 0;i<150;i++){

    if(i>=5){
        break;
    }
}
console.log("life after break up");

let n = 54;
while(n>25){
    console.log(n);
    if(n<=50){
        break;
    }
    n--;
}

for(let i =1;i<=20;i++){
    if(i%2===1){
        continue;
    }
  console.log("Even numbers",i);
}
  
let n = 0;
while(n<50){
     n++;
    if(n%2!==0){
        continue;
    }
    console.log(n);
   
}
let n = 0;
do{
    console.log(n);
    n++;
}
while(n<5)