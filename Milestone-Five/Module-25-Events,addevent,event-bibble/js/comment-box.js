document.getElementById("btn-post-comment").addEventListener("click", function(){
    const textInput = document.getElementById("text-input");
    const value = textInput.value;

    const commentContainer = document.getElementById("comment-container");
    
    const createElementP = document.createElement("p");
    createElementP.classList.add("comments")
    createElementP.innerText = value;


    commentContainer.appendChild(createElementP);

    textInput.value = "";
})


document.getElementById("input-delete").addEventListener("keyup",function(event){
    const text = event.target.value;

    const btnDelete = document.getElementById("btn-delete");

    if(text === 'delete'){
        console.log("Delete Type");
        btnDelete.removeAttribute("disabled");
        const hiddenInfo = document.getElementById("hidden-info");
        hiddenInfo.style.backgroundColor = "red";
        hiddenInfo.style.borderRadius = "10px";
        hiddenInfo.style.textAlign = "center";

    }
    else{
        console.log("Something Else");
        btnDelete.setAttribute("disabled",true);
        const hiddenInfo = document.getElementById("hidden-info");
        hiddenInfo.style.backgroundColor = "green";
        hiddenInfo.style.borderRadius = "10px";
        hiddenInfo.style.textAlign = "center";
    }
 
})