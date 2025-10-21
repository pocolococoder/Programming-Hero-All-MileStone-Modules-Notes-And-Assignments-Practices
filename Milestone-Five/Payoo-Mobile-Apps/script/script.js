//login button functionality

    document.getElementById("btn-login").addEventListener("click",function(e){
        e.preventDefault();
        const mobileNumber = +8801737539282;
        const pinNumber = 1234;

        const mobileInputValue = document.getElementById("mobile-number").value;

        const mobileNumValueInt = parseInt(mobileInputValue);

        const pinInputValue = document.getElementById("pin-number").value;

        const pinNumValueInt = parseInt(pinInputValue);

        console.log(mobileNumValueInt,pinNumValueInt);

        if(mobileNumber===mobileNumValueInt && pinNumber===pinNumValueInt){
            window.location.href="../main.html"

        }
        else{
            alert("Please Provide Authentic Credentials")
        }
    });


