

// love functionality

const loveButtons = document.getElementsByClassName("love-increase");

for(const loveButton of loveButtons){
    loveButton.addEventListener("click", function(){
        let count = 0;

        const loveAvailable = parseInt( document.getElementById("increase-number").innerText);

//    console.log(loveAvailable);

        const increseLove = loveAvailable + 1;
        document.getElementById("increase-number").innerText = increseLove;

    })
};


//Copy function

const copyButtons = document.getElementsByClassName("increase-copy");

for(const copyButton of copyButtons){
    copyButton.addEventListener("click", function(){
       const serviceName = copyButton.parentNode.children[1].innerText;

       const serviceNumber = copyButton.parentNode.children[3].innerText;

       alert("Copied" + " " + serviceName + " " + serviceNumber);

       let countCopy = 0;

       const availableCopy = parseInt(document.getElementById("copy-number").innerText);

        countCopy = availableCopy + 1;
       document.getElementById("copy-number").innerText = countCopy;
    });
}


    //Call function

    const callButtons = document.getElementsByClassName("call-button");

    for(const callButton of callButtons){
      callButton.addEventListener("click", function(){
        const serviceTitle = callButton.parentNode.children[1].innerText;

        const serviceName = callButton.parentNode.children[2].innerText;
        
        const serviceNumber = callButton.parentNode.children[3].innerText;
        
        const availableCoin = parseInt(document.getElementById("coin-count").innerText);

        const now = new Date();

        const localTime = now.toLocaleTimeString();

        if(availableCoin<20){
          alert("You dont have enough coins. You dont make  call");
          return;
        }

        alert("calling" + " " + serviceNumber + " " + serviceTitle);

        const currentCoin = (availableCoin - 20);

        document.getElementById("coin-count").innerText = currentCoin;


        const historyContainer = document.getElementById("history-container");

        const newElement = document.createElement("div");

        newElement.innerHTML = `
        <div class="flex justify-between mt-2 p-2 shadow-md rounded-md">

        <div class="space-y-2">

        <p>${serviceName}</p>
        <p>${serviceNumber}</p>
        </div>

        <p>${localTime}</p>


        </div>
          
        `;

        historyContainer.appendChild(newElement);

        //clear function

        document.getElementById("clear-btn").addEventListener("click", function(){
            document.getElementById("history-container").innerHTML = " ";
            
        })
       
      })
    }

   