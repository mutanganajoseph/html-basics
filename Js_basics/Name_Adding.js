const error = document.getElementById("error");
const nameList = document.getElementById("nameList");
const lists = document.getElementById("lists");
const add = document.getElementById("add");
const clearList = document.getElementById("clear");
const nameInputField = document.getElementById("name");

add.addEventListener("click", function() {

    const nameInput = nameInputField.value.trim();
    if (nameInput.length >= 3) {
        const nameItem = document.createElement("li");
        nameItem.textContent = nameInput;
        nameList.appendChild(nameItem);
        nameList.style.display = "block";
        lists.textContent = "Name Added";
        document.getElementById("name").value = ""; // Clear input after adding
    }

    else if(!nameInput){
        error.textContent = "Please Fill Input Field";
        error.style.display = "block"
    }
});

nameInputField.addEventListener("input", function(){
    const nameInput = nameInputField.value.trim();
    if(nameInput.length >= 3){
        error.style.display = "none";

    }

    else{
        error.style.display = "block";
        error.textContent = "Name is too short or empty. Enter at least 3 characters!";
    }
   


   
    
})

clearList.addEventListener("click", function() {
    if(lists.textContent === "Empty Names!"){
        error.textContent = "No list to clear!";
        error.style.display = "block";
    }

    else if(lists.textContent === "List Cleared"){
        error.style.display = "block";
        error.textContent = "List already cleared!"
    }
    else{
        nameList.innerHTML = ""; // Clear the list
        nameList.style.display = "none";
        lists.textContent = "List Cleared";
        error.style.display = "none"; // Hide the error message
        document.getElementById("name").value = ""; // Clear input after adding
    }
});
