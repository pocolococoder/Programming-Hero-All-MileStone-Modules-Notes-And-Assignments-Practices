// const tagName = document.getElementsByTagName("h1");
// console.log(tagName);
// for(const name of tagName){
//     console.log(name.innerText);
//     name.style.color = "red";
//     name.style.backgroundColor = "gold";
//     name.style.borderRadius = "13px";
//     name.style.padding = "10px";
//     name.style.fontSize = "1rem";
//     name.style.textAlign = "center"
// }

// const inSaudiPlayer = document.getElementsByClassName("saudi");
// console.log(inSaudiPlayer);
// for(const saudiPlayer of inSaudiPlayer){
//     saudiPlayer.style.color = "green";
//     saudiPlayer.style.fontWeight = "bold";
// }

// const handSomePlayer = document.getElementById("handsome");
// handSomePlayer.style.fontSize = "23px";
// handSomePlayer.style.fontWeight = "bold";


const queryTest = document.querySelector("#food-container ol #ol-span");
// console.log(queryTest.innerText);

const queryAll = document.querySelectorAll("#food-container  span");
console.log(typeof queryAll);
for(const span of queryAll){
    console.log(span.innerHTML);
}


const food = document.getElementById("food-container");
const getAt = food.getAttribute("id");
console.log(getAt);

// const setAt = food.setAttribute('title','hihi')
// console.log(setAt);

const players = document.getElementById("player-container");
console.log(players.innerText);

const sections = document.getElementsByTagName('section');
console.log(sections);
for(const section of sections){
    console.log(section);
    section.style.backgroundColor = "gold";
    section.style.borderRadius = "10px";
    section.style.padding = "5px"
    section.style.marginTop = "10px"

}

const pushInPlayers = document.getElementById("player-container");
const h1 = document.createElement("h1");
h1.innerText = "Cricketer"
pushInPlayers.appendChild(h1);

const ul = document.createElement("ul");

const li2 = document.createElement("li");
li2.innerText = "Dcook"
ul.appendChild(li2) ;

const li3 = document.createElement("li");
li3.innerText = "mangakara"
ul.appendChild(li3) ;

const li4 = document.createElement("li");
li4.innerText = "jangakara"
ul.appendChild(li4) ;


pushInPlayers.appendChild(ul);



const foodUlPush = document.getElementById("food-container");


foodUlPush.innerHTML = 
`
<h1 class="f-h1">Food I Hated Most</h1>
<ul>
<li>Sobji</li>
<li>kakella</li>
<li>bot</li>
<li>Hilsha</li>
</ul>

`


