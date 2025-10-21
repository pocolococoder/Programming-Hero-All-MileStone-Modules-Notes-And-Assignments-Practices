const money = 20;

if(money>300){
    console.log("Bro You are rich")
}
else{
    if(money>100){
        console.log("tui gorib")
    }
    else{
        if(money>0){
            console.log("dosto kolakha")
        }
        else{
            console.log("tui amar bondhu na")
        }
    }
}


const age = 18;

age>=18 ? console.log("vote dio") : console.log("ghumay thako")

let price = 1010;
const isLeader = false;

price = isLeader===true? console.log(0) : console.log(price+ 100);

price = isLeader===true


price = isLeader===ture? price >1000 ? price/2 : 0 : price + 100;

const isLeaders = true;

if(isLeaders){
    console.log("Chair chere dao")
}
else{
    console.log("vitore dhukte dibo na")
}

const isPassed = false;

if(!isPassed){
    console.log("Biye dao")
}
else{
    console.log("porao")
}


let burgerPrice = 510;

if(burgerPrice>500){
    console.log("Free Coke");
}
else{
    console.log("Else coke: 30tk")
}

let weight = 58;
let height = 2;

let BMI = weight / (height**2);

if(BMI<18.5){
    console.log("You are Underweight");
}

else if(BMI>=18.5 && BMI<=24.9){
    console.log("You are normal");
}

else if(BMI>=25 && BMI<=29.9){
    console.log("You are overweight");
}
else{
    console.log("you are obese");
}

let marks = 89;

if(marks>=90 && marks<=100){
    console.log("A");
}

else if(marks>=80 && marks<=89){
    console.log("B");
}
else if(marks>=70&& marks<=79){
    console.log("C");
}
else if(marks>=60 &&  marks<=69){
    console.log("D")
}
else{
    console.log("F")
}

let myMarks = 79;
let frndsMarks = 39;

if(myMarks>80){
    if(frndsMarks>80){
        console.log("Go for a lunch");
    }
    else if(frndsMarks<80 && frndsMarks>=60){
        console.log("Good luck next time");
    }
    else if(frndsMarks<60 && frndsMarks>=40){
        console.log("keep your friend's message unseen");
    }
    else{
        console.log("block")
    }
}
else{
    console.log("Sleep")
}



if(num1>num2){
    result = num1 * num1;
    console.log(result);
}

else{
    result = num1 + num2;
    console.log(result);
}

let num1 = 14;
let num2 = 10;

num1>num2 ? console.log(num1*num1) : console.log(num1+num2);

let age = 16;
let isStudent = true;
let tk = 800;

if(age<10){
    console.log("Free");
}
 else if(!isStudent){
    let discount = tk *50 / 100;
    let payAmount = tk - discount;
    console.log(payAmount);
 }

 else if(age>=60){
    let discount = tk * 15 /100;
    let payAmount = tk - discount;
    console.log(payAmount);
 }
 else{
    console.log("Regular ticket price",tk)
 }
