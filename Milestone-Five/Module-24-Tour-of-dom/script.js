// const players = document.getElementById("player-container");
// console.log(players.innerText);
// console.log(players.innerHTML);

// players.innerText = "Tom"
// // console.log(players);

// players.innerHTML = `<h1>This is Rezwan's Team </h1>
// <ul>
// <li>Messi</li>
// <li>Messi</li>
// <li>Messi</li>
// <li>Messi</li>
// </ul>

// `
// console.log(players.innerHTML);
// console.log(players.innerText);

// const sections = document.getElementsByTagName("section");
// const sections = document.querySelectorAll("section");
// console.log(sections);

// for(const section of sections){
//     console.log(section);
//     section.style.backgroundColor = "lightgreen";
//     section.style.border = "2px solid red"
//     section.style.borderRadius = "12px"
//     section.style.padding = "12px"
// }

// const childNodess = document.getElementById('player-container').childNodes;
// console.log(childNodess);
// for(childnode of childNodess){
//     console.log(childnode);
// }


// const newChild = document.createElement("li");

// newChild.innerText = "New Born baby";
// const playerList = document.getElementById("players-list");
// playerList.appendChild(newChild);
// console.log(playerList)

//parent node


// console.log(mainContainer)

// //create child

// const placeSection = document.createElement("section");

// const h1 = document.createElement('h1');
// h1.innerText = "Places I Want To Visit";
// placeSection.appendChild(h1);

// const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// li1.innerText = "Bandorban";
// ul.appendChild(li1);
// placeSection.appendChild(ul)

// const li2 = document.createElement("li");
// li2.innerText = "khagra";
// ul.appendChild(li2)

// //append
// mainContainer.appendChild(placeSection);

const mainContainer = document.getElementById("main-container");
const bookSection = document.createElement("section");

bookSection.innerHTML = `
<h1>Books I Need To Read</h1>
<ul>
<li>Physics</li>
<li>Chem</li>
<li>Bio</li>
</ul>
`;

mainContainer.appendChild(bookSection);
console.log(bookSection);
