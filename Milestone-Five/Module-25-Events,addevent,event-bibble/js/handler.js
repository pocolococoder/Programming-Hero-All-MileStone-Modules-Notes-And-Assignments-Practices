document.getElementById("btn-update-title").addEventListener("click", function textChange(){
    alert("Text Change Alert!")
 const title =   document.getElementById("h1-text").innerText = "Hi! Text has Changed!";

});

document.getElementById("btn-login").addEventListener("click", function (){
    document.getElementById("user").innerText = "Logged In Successfully"
});

document.getElementById("btn-update").addEventListener("click", function (){
    const inputValue = document.getElementById("input-name");
    const value = inputValue.value;

    const nameChange = document.getElementById("name");
    nameChange.innerText = value;
})