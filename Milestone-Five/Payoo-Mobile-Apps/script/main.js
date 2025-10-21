



    document.getElementById("add-money-btn").addEventListener("click", function(e){
        e.preventDefault();
// console.log("clicked");

        const bank = getInputValue("select-bank");

        const accountNumber = getInputValueNumber("bank-account-number");

        const amount = getInputValueNumber("amount-to-add");

        const pinNumber = getInputValueNumber("pin-number");

        const validPin = 1234;

        if(amount<=0){
            alert("Invalid amount");
            return;
        }

// console.log(bank,accountNumberInt,amountInt,pinInt);


        function getInputValueNumber(id){
          const inputField =   document.getElementById(id);
          const inputFieldValue = inputField.value;
          const inputFieldValueNumber = parseInt(inputFieldValue);
          return inputFieldValueNumber;
        }


        function getInputValue(id){
            const inputField = document.getElementById(id);
            const inputFieldValue = inputField.value;
            return inputFieldValue;
        }


        function getInnerText(id){
            const element = document.getElementById(id);
            const elementValue = element.innerText;
            const elementValueNumber = parseInt(elementValue);
            return elementValueNumber;
        }

        function setInnerText(value){
            const availableBalanceElement = document.getElementById("available-balance");
            availableBalanceElement.innerText = value;
        }


       

        // console.log(availableBalance);

        if(accountNumber.length < 11){
            alert("Please Provide Valid Account Number");
            return;
        }

        if(pinNumber !== validPin){
            alert("please provide valid pin");
            return;
        }

         const availableBalance = getInnerText("available-balance");

        const totalNewAvailableBalance = amount + availableBalance;

        setInnerText(totalNewAvailableBalance);

        const data = {
            name: "Add Money",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data);
        

    });


    //Toggling feature

        document.getElementById("add-button").addEventListener("click", function(e){
       
        const forms = document.getElementsByClassName("form");
        
        for(const form of forms){
          form.style.display = "none"; 
        }

        document.getElementById("add-money-parent").style.display  = "block";

            
    });


        document.getElementById("cash-out-button").addEventListener("click", function(){

            const forms = document.getElementsByClassName("form");
        
        for(const form of forms){
          form.style.display = "none"; 
        }

        document.getElementById("cash-out-parent").style.display  = "block";

        
    });

    document.getElementById("transfer-button").addEventListener("click", function(){
        
         const forms = document.getElementsByClassName("form");
        
        for(const form of forms){
          form.style.display = "none"; 
        }

        document.getElementById("transfer-money-section").style.display  = "block";

    });

     document.getElementById("bonus-button").addEventListener("click", function(){
        
         const forms = document.getElementsByClassName("form");
        
        for(const form of forms){
          form.style.display = "none"; 
        }

        document.getElementById("get-bonus-section").style.display  = "block";

    });

    document.getElementById("transaction-button").addEventListener("click", function(){
         const forms = document.getElementsByClassName("form");
        
        for(const form of forms){
          form.style.display = "none"; 
        }

        document.getElementById("transaction-section").style.display  = "block";
    })




    //cashout button -withdraw


         document.getElementById("cash-out-btn").addEventListener("click", function(e){
         e.preventDefault();

        
        function getInputValueNumber(id){
          const inputField =   document.getElementById(id);
          const inputFieldValue = inputField.value;
          const inputFieldValueNumber = parseInt(inputFieldValue);
          return inputFieldValueNumber;
        }

        function getInputValue(id){
            const inputField = document.getElementById(id);
            const inputFieldValue = inputField.value;
            return inputFieldValue;
        }

        
        function getInnerText(id){
            const element = document.getElementById(id);
            const elementValue = element.innerText;
            const elementValueNumber = parseInt(elementValue);
            return elementValueNumber;
        }

        function setInnerText(value){
            const availableBalanceElement = document.getElementById("available-balance");
            availableBalanceElement.innerText = value;
        }

        

         const agentNumber = getInputValueNumber("agent-number-input");

        const amountWithdraw = getInputValueNumber("amount-to-withdraw");

        
        const cashOutPin = getInputValueNumber("cashout-pin-number");

          const validPin = 1234;

        if(agentNumber.length < 11){
            alert("Please Provide Authentic Account Number");
            return;
        }

        if(cashOutPin!==validPin){
            alert("Please Provide Valid Pin");
        }

        const availableBalance = getInnerText("available-balance");

         const totalNewAvailableBalance = availableBalance - amountWithdraw;

         if(amountWithdraw>availableBalance){
            alert("No enough balance");
            return;
         }


        setInnerText(totalNewAvailableBalance) ;

        const data = {
            name: "Cash Out",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data);


    })


    //Transfer Money 

    document.getElementById("transfer-money-btn").addEventListener("click", function(e){
         e.preventDefault();

        
        function getInputValueNumber(id){
          const inputField = document.getElementById(id);
          const inputFieldValue = inputField.value;
          const inputFieldValueNumber = parseInt(inputFieldValue);
          return inputFieldValueNumber;
        }

        function getInputValue(id){
            const inputField = document.getElementById(id);
            const inputFieldValue = inputField.value;
            return inputFieldValue;
        }

        
        function getInnerText(id){
            const element = document.getElementById(id);
            const elementValue = element.innerText;
            const elementValueNumber = parseInt(elementValue);
            return elementValueNumber;
        }

        function setInnerText(value){
            const availableBalanceElement = document.getElementById("available-balance");
            availableBalanceElement.innerText = value;
        }

        

         const accountNumber = getInputValueNumber("transfer-account-input");

        const amountTransfer = getInputValueNumber("amount-to-transfer");
        
        const cashOutPin = getInputValueNumber("transfer-pin-number");

          const validPin = 1234;

        if(accountNumber.length < 11){
            alert("Please Provide Authentic Account Number");
            return;
        }

        if(cashOutPin!==validPin){
            alert("Please Provide Valid Pin");
        }

        const availableBalance = getInnerText("available-balance");

      

         const totalNewAvailableBalance = availableBalance - amountTransfer;


        setInnerText(totalNewAvailableBalance) ;

       

        const data = {
            name: "Transfer Money",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data);


    })


    //Get bonus 

    document.getElementById("bonus-coupon-btn").addEventListener("click", function(e){
         e.preventDefault();

        
        function getInputValueNumber(id){
          const inputField = document.getElementById(id);
          const inputFieldValue = inputField.value;
          const inputFieldValueNumber = parseInt(inputFieldValue);
          return inputFieldValueNumber;
        }

        function getInputValue(id){
            const inputField = document.getElementById(id);
            const inputFieldValue = inputField.value;
            return inputFieldValue;
        }

        
        function getInnerText(id){
            const element = document.getElementById(id);
            const elementValue = element.innerText;
            const elementValueNumber = parseInt(elementValue);
            return elementValueNumber;
        }

        function setInnerText(value){
            const availableBalanceElement = document.getElementById("available-balance");
            availableBalanceElement.innerText = value;
        }

        

        const bonusCoupon = getInputValue("bonus-coupon-input");

         

          const coupon = "free";

       

        if(coupon!==bonusCoupon){
            alert("Please Provide Valid Coupon");
        }

        const availableBalance = getInnerText("available-balance");

         const totalNewAvailableBalance = availableBalance + 1000;


        setInnerText(totalNewAvailableBalance) ;

        const data = {
            name: "Get Bonus",
            date: new Date().toLocaleTimeString()
        }
        transactionData.push(data);


    })


   
    const transactionData = [];

    document.getElementById("transaction-button").addEventListener("click",function(){

    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText = "";

    for(const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML=`
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
              <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                  </div>
                  <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                  </div>
              </div>
      
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `

        transactionContainer.appendChild(div);


    }
})
    