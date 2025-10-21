
  





//increase love functionality

const increaseLove = document.getElementsByClassName("love-increase");
let count = 0;

for (let i = 0; i < increaseLove.length; i++) {
  increaseLove[i].addEventListener("click", function() {
    count++;
    document.getElementById("increase-number").innerText = count;
    
  });
}



  //Copy Button Functionality

    const increaseCopy = document.getElementsByClassName("increase-copy");

    for(const copy of increaseCopy){
      copy.addEventListener("click", function(){
        const serviceNumber = copy.parentNode.children[3].innerText;
        navigator.clipboard.writeText(serviceNumber);
        alert("Copied the service number" + " " + serviceNumber);
        const copyCounter = parseInt(document.getElementById("copy-number").innerText);

        const increaseCopyCount = copyCounter + 1;
        document.getElementById("copy-number").innerText = increaseCopyCount;

      })
    };


    //call function button

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

        const newContainer = document.createElement("div");

        newContainer.innerHTML = `
        <div id="history-div" class="flex justify-between">
        <div>
                        <p class="font-bold">${serviceTitle}</p>
                        <p class="text-gray-600">${serviceNumber}</p>
                    </div>
                    <p class="md:mt-2 lg:mt-0 text-gray-600">${localTime}</p>

        </div>
        
        `
        historyContainer.appendChild(newContainer);
      })
    }

    document.getElementById("clear-btn").addEventListener("click", function(){
      document.getElementById("history-container").innerHTML = "";
    })




