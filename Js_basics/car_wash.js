
const footer = document.getElementById("footer");
const error = document.getElementById("error");
const access = document.getElementById("access");
let back = document.querySelector("h4");

function clear(){
    error.textContent = '';
    access.textContent = '';
}


 first_name = document.getElementById("first_name").addEventListener("input", clear);
 second_name = document.getElementById("second_name").addEventListener("input", clear);
 email = document.getElementById("email").addEventListener("input", clear);
 car_name = document.getElementById("car_name").addEventListener("input", clear);
 car_id = document.getElementById("car_id").addEventListener("input", clear);
 time = document.getElementById("time").addEventListener("input", clear);
 message = document.getElementById("message").addEventListener("input", clear);
 washer_name = document.getElementById("select").addEventListener("input", clear);


document.getElementById("send").onclick = function(e){
    e.preventDefault();
    const first_name = document.getElementById("first_name").value.trim();
    const second_name = document.getElementById("second_name").value.trim();
    const email = document.getElementById("email").value.trim();
    const car_name = document.getElementById("car_name").value.trim();
    const car_id = document.getElementById("car_id").value.trim();
    const time = document.getElementById("time").value.trim();
    const message = document.getElementById("message").value.trim();
    const washer_name = document.getElementById("select").value.trim();

    if (washer_name =="select_washer"){
        error.textContent = 'You did not select washer!'
    }


    else if(first_name && second_name && email && car_name && car_id && time && washer_name && message && washer_name){
        clear();
        footer.textContent = `Hello ${first_name}! Thank you very much your booking was accepted successfully! Your message received, ${message}.`;
        back.textContent = 'Back';
       
    }

    else {
        clear();
        error.textContent = 'Please fill the form with valid inputs!';
    }

};

document.getElementById('terms').onclick = function(e){
    e.preventDefault();
    footer.textContent = 'Nothing is here!'
}

document.getElementById('privacy').onclick = function(e){
    e.preventDefault();
    footer.textContent = 'Nothing is here!'
}
