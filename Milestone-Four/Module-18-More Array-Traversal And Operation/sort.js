// const numbers = [12,3,22,44,42,64,2];
// console.log(numbers);
// numbers.sort();
// console.log(numbers)


// const sorted_ages = numbers.sort(function(a,b){return a- b});

// console.log(sorted_ages);

// const employess = [
//     {name:"atik",designation:"dev",salary: 20000},
//     {name:"batik",designation:"dev",salary: 20000},
// ]
// // console.log(employess[0].name);
// // console.log(employess[1].salary)
// employess[0].name = "ashraf"
// for(const employee of employess){
//     console.log(employee);
//     console.log(employee.salary, employee.designation,employee.name);
// }

const numbers =[
    [1,23,1,3,4,2,1],
    [13,64,4,3,2,4,3],
    [2,3,23,2,1,3,2,2]
]
 numbers[0].pop();
 numbers[0].push(1233)
console.log(numbers[0])

for(const marks of numbers){
    console.log(marks);
}
