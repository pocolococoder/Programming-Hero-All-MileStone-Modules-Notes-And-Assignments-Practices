// function totalFine(fare) {
//     if(typeof fare ==="parseInt"){
//         let fine = fare + fare * (20/100)+ 30;
//         return fine;
//     }
//     else{
//         return "Invalid";
//     }
        
// }

// const fineTotal = totalFine(0);
// console.log(fineTotal);

// function  onlyCharacter(str) {
//     if(typeof str==="string"){
//         const trimStr = str.trim();
//          const splitStr = trimStr.split(" ");
//          const joinStr = splitStr.join("");
//          return joinStr;
//     }
//     else{
//         return "Invalid"
//     }
         
    
// }
// const upperCase = onlyCharacter(true);
// console.log(upperCase);


// function  bestTeam( player1, player2 ) {

//           if(typeof player1 !=="object" || typeof player2 !=="object"){
//             return "Invalid";
//           }
//           const total1 = player1.foul + player1.cardY + player1.cardR;
//           const total2 = player2.foul + player2.cardR + player2.cardY;

//           if(total1>total2){
//             return player2.name;
//           }
//           else if(total1<total2){
//             return player1.name;
//           }
//           else{
//             return "Tie";
//           }
// }
// const inputObject = bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
// { name: "Sweden", foul: 7, cardY: 4, cardR: 1 });
// console.log(inputObject);



// function  isSame(arr1 , arr2 ) {
//     if(Array.isArray(arr1)===false || Array.isArray(arr2)===false){
//         return "Invalid";
//     }

//     if(arr1.length !== arr2.length){
//         return false;
//     }

//     for(let i = 0;i<arr1.length;i++){
//         if(arr1[i]!==arr2[i]){
//             return false;
//         }
//     }

//     return true;
// }
// const isTheSame = isSame([2 , 5 , 6] ,256);
// console.log(isTheSame);


function resultReport(marks) {
 if(!Array.isArray(marks)){
    return "Invalid";
 }

 if(marks.length===0){
    return { finalScore: 0 , pass: 0, fail: 0 };
 }

 let pass = 0;
 let fail = 0;
 let total = 0;

 for(let i = 0;i<marks.length;i++){
    const mark = marks[i];
    total += mark;

    if(mark>=40){
    pass++;
 }

 else{
    fail++;
 }

 
 }

 const avg = Math.round(total/marks.length);

 return {
    finalScore: avg,
    pass: pass,
    fail: fail
 };



}

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));


