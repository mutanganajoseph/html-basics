
const errorDiv = document.getElementById("error");
const firstNameError = document.getElementById("firstNameError");
const seconNameError = document.getElementById("secondNameError");
const emailError = document.getElementById("emailError");
const my_field = document.getElementById("myField");
const firstHover = document.getElementById("firstHover");
const secondHover = document.getElementById("secondHover");
const emailHover = document.getElementById("emailHover");



function clearError(){
    
   
    
  
    firstNameError.textContent = '';
    firstNameError.style.display = "none";

    seconNameError.textContent = '';
    seconNameError.style.display = "none";

    emailError.textContent = '';
    emailError.style.display = "none";
   
}

 


 document.getElementById("firstName").addEventListener("mouseover", function(){
    firstHover.style.display = 'block';
    firstHover.innerHTML = `Enter Your First Name.`;
 });


 document.getElementById("secondName").addEventListener("mouseover", function(){
    secondHover.style.display = "block";
    secondHover.innerHTML = `Enter you second Name.`;
 });
 document.getElementById("email").addEventListener("mouseover", function(){
    emailHover.style.display = "block";
    emailHover.innerHTML = `Enter Your Email.`;
 });


 document.getElementById("firstName").addEventListener("mouseout", function(){
    firstHover.style.display = 'none';
   
 });


 document.getElementById("secondName").addEventListener("mouseout", function(){
    secondHover.style.display = "none";
   
 });
 document.getElementById("email").addEventListener("mouseout", function(){
    emailHover.style.display = "none";
   
 });

 


 document.getElementById("firstName").addEventListener("input", clearError);
 document.getElementById("secondName").addEventListener("input", clearError);
 document.getElementById("email").addEventListener("input", clearError);



document.getElementById("submit").onclick = function(e){
    e.preventDefault();
    const firstName = document.getElementById("firstName").value.trim();
    const secondName = document.getElementById("secondName").value.trim();
    const email = document.getElementById("email").value;

    if(email.match(/^[^@]+@[^@]+\.[^@]+$/) && firstName && secondName){
        my_field.innerHTML = `Hello ${firstName}, Your form Submitted succefully! <a href="formSubmit.html">Back</a>`;
    }

    if(!email.match(/^[^@]+@[^@]+\.[^@]+$/))
    {   emailError.style.display = "block";
        emailError.innerHTML = `Double check your email!`;
    }

     if (!firstName){
        firstNameError.style.display = "block";
        firstNameError.innerHTML =`Fill out First Name field!`;
        
    }

    if(!secondName){
        seconNameError.style.display = "block";
        seconNameError.innerHTML = `Fill out second Name field!`;

    }


   

};