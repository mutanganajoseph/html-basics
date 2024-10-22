
const footer = document.getElementById("footer");
const error = document.getElementById("error");
const access = document.getElementById("access");
const back = document.querySelector("back");

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
    const first_name = document.getElementById("first_name").value;
    const second_name = document.getElementById("second_name").value;
    const email = document.getElementById("email").value;
    const car_name = document.getElementById("car_name").value;
    const car_id = document.getElementById("car_id").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;
    const washer_name = document.getElementById("select").value;
    

    if(first_name && second_name && email && car_name && car_id && time && washer_name && message){
        clear();
        footer.textContent = `Hello ${first_name}! Thank you very much your booking was accepted successfully! Your message received ${message}.`;
        back.textContent = 'Back';
       
    }

    else {
        clear();
        error.textContent = 'Please fill the form!';
    }

};
