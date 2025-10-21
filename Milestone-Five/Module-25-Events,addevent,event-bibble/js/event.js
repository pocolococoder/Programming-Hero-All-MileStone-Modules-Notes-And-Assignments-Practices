function makeYellow(){
    document.body.style.backgroundColor = "yellow";
        console.log("Triaged")
}

function makeRed(){
    document.body.style.backgroundColor = "red";
    console.log("Triaged")
}

const makeBlue = document.getElementById("btn-make-blue");
makeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = "blue";
    console.log("Triaged");
}

const makePurples = document.getElementById("btn-make-purple");


makePurples.onclick = makePurple;

function makePurple(){
    document.body.style.backgroundColor = "purple";
}

document.getElementById("btn-make-green").addEventListener("click",function makeGreen(){
    document.body.style.backgroundColor = "green"
})

document.getElementById("btn-make-gold").addEventListener("click", function makeGold(){
    document.body.style.backgroundColor = "gold"
})

document.getElementById("btn-make-black").addEventListener("click",function makeBlack (){
    document.body.style.backgroundColor = "black";
    alert("Triaged");
})