const write = document.getElementById("write");
const myKeyboard = document.getElementById("myKeyboard");
const type = document.querySelectorAll(".type");
const number = document.querySelectorAll(".number");
const space = document.getElementById("space");
const enter = document.getElementById("enter");
let backspaceInterval;
const save = document.getElementById("save");
const error = document.getElementById("error");
const capsLock = document.getElementById("capsLock");
let isCapsLock = false;
const close = document.getElementById("close");
const symbols = document.querySelector(".symbols");
const getSymbols = document.getElementById("getSymbols");
const symbol = document.querySelectorAll(".symbol");
const setting = document.getElementById("setting");
const settings = document.getElementById("settings");
const closeSetting = document.getElementById("closeSetting");
const Yes = document.getElementById("yes");
const No = document.getElementById("no");
const closeThis = document.getElementById("closeThis");
const fold = document.querySelector(".fold")

write.focus()

write.addEventListener("click", function(){
    myKeyboard.style.display = "block";
    write.setAttribute("placeholder", "Now You Could Start typing with the keyboard...");
    write.style.height +="20vh";
   
    
    
});


type.forEach(Element =>{
    Element.addEventListener("click", () => {
        write.focus()
        let value = Element.value;
    

        // Check the current Caps Lock state from `textTransform`
        if (Element.style.textTransform === "uppercase") {
            value = value.toUpperCase(); // Convert to uppercase
            write.value += value;
        } else {
            value = value.toLowerCase();
            write.value += value; 
            
        }
        
        

    });

    // Element.addEventListener("mousedown", function(){
    //     backspaceInterval = setInterval(() =>{
    //         write.value += Element.value;
    //     }, 100);
           
        
    // });


    Element.addEventListener("mouseup", () =>{
        
            clearInterval(backspaceInterval);
            

    });
    
    Element.addEventListener("mouseleave", () =>{
        
            clearInterval(backspaceInterval);
            
    });
});


document.addEventListener("click", (event) => {
    if (!myKeyboard.contains(event.target) && (!write.contains(event.target))) {
        myKeyboard.style.display = "none";
        write.setAttribute("placeholder", "Click To Start Keyboard.");
        write.focus()
        write.style.height ="";
        symbols.style.display = "none";
        
          
    }
});


number.forEach(Element =>{
    
    Element.addEventListener("mousedown", function(){
        if(Element.value =="backspace"){
           

            backspaceInterval = setInterval(() =>{
                write.value = write.value.slice(0, -1);
                write.focus()
            }, 100);
            
           
        }
    });

    // Element.addEventListener("click", function(){
    //     write.focus()

    // });

    Element.addEventListener("mousedown", function(){
        if(Element.value !="backspace"){
           backspaceInterval = setInterval(() =>{
            write.value += Element.value;
            write.focus()
           }, 100)
        }
    });

    Element.addEventListener("mouseup", () =>{
        if(Element.value != "backspace"){
            clearInterval(backspaceInterval);
            
        }
    });
    
    Element.addEventListener("mouseleave", () =>{
        if(Element.value != "backspace"){
            clearInterval(backspaceInterval);
            
        }
    });


    Element.addEventListener("mouseup", () =>{
        if(Element.value === "backspace"){
            clearInterval(backspaceInterval);
            
        }
    });
    
    Element.addEventListener("mouseleave", () =>{
        if(Element.value === "backspace"){
            clearInterval(backspaceInterval);
            
        }
    });
});




space.addEventListener("click", function(){
    write.focus()
});

space.addEventListener("mousedown", function(){
    write.focus()
    backspaceInterval = setInterval(() =>{
        write.value += space.value;
    },100)
});

space.addEventListener("mouseup", function(){
    clearInterval(backspaceInterval);
    write.focus()
});

space.addEventListener("mouseleave", function(){
    clearInterval(backspaceInterval);
    write.focus()
});




enter.addEventListener("click", function(){
    write.value += '\n';
    write.focus()

    write.scrollTop = write.scrollHeight;
});


save.addEventListener("click", function() {
    const text = write.value; // Get the content from the textarea
    const blob = new Blob([text], { type: "text/plain" }); // Create a Blob object
    const link = document.createElement("a"); // Create a link element
    const url = URL.createObjectURL(blob); // Create an object URL for the Blob
    if(!write.value){
        error.textContent = "You can't save empty file!";
    }
    
    else
    {
        link.href = url;
        link.download = "my_text.txt"; // Set the default filename
        link.click(); // Programmatically click the link to trigger the download
    
        // Optional: revoke the object URL after use to release resources
        URL.revokeObjectURL(url);
        error.style.display = "none";

    }
});

capsLock.addEventListener("click", function(){
    type.forEach(Element => {

        let value = Element.value;
        
        if(Element.style.textTransform === "uppercase"){
            Element.style.textTransform = "lowercase";
            capsLock.style.backgroundColor="rgba(54, 52, 50, 0.055)";
            capsLock.style.color = "rgba(37, 150, 150, 0.541)";
            capsLock.style.textTransform = "none";
            

            
        }
        else{
            Element.style.textTransform = "uppercase";
            capsLock.style.textTransform = "none";
            capsLock.style.backgroundColor = "green";
            capsLock.style.color = "white";
            
            
            
        }
    })
});

close.addEventListener("click", function(){
    symbols.style.display = "none";
    

});


getSymbols.addEventListener("click", function() {
    if (symbols.style.display === "block") {
        symbols.style.display = "none"; 
    } else {
        symbols.style.display = "block"; 
    }
});



symbol.forEach(Element =>{
    
    Element.addEventListener("click", function(){
        write.value += Element.value;
        write.focus()
    })
});

setting.addEventListener("click", function(){
    
    settings.style.display = "block";
    fold.style.display = "block";

});

closeSetting.addEventListener("click", function(){
    settings.style.display = "none";

});


closeThis.addEventListener("click", function(){
    fold.style.display = "none";
})







