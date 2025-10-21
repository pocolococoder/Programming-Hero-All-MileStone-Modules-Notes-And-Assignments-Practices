var area = 15;

var devided = area/2;
console.log(devided)

var money = 10000;

if(money>=25000){
    console.log("Laptop");
}
else if(money>=10000){
    console.log("Cycle")
}
else{
    console.log("Chocolate")
}

var lastDay = 11;

for(let i = 1; i<lastDay;i++){
    if(i%3==0){
        console.log(i,"-","medicine")
    }
    else{
        console.log(i,"-","rest")
    }

}

var fileName= "docx.xpdf";

if(fileName.includes()=="#"){
    console.log("Store");
}

else if(fileName.includes()=="pdf"){
    console.log("Store")
}
else if(fileName.includes()=="docx"){
    console.log("Store")
}
else{
    console.log("Delete")
}

var student= {
     name: "jhankar" , roll: 1014 ,department: "cse" 
    };

    var name = student.name;
    var roll = student.roll;
    var department = student.department;
    var ext = "@ph.ac.bd";

    var generate = name.concat(roll).concat(department).concat(ext);
    console.log(generate);


var experience = 40;
var startingSalary = 30000;


for(let i = 1; i<=experience;i++){
 startingSalary = startingSalary + startingSalary*0.05;
  console.log(startingSalary.toFixed(2))
}
