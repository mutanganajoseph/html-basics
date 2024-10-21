let totalSum = 0.00; // Initialize totalSum variable
const num = document.getElementById("num");
const resultDiv = document.getElementById("result");

function updateResult() {
    resultDiv.textContent = `${totalSum.toFixed(2)}FRW`; // Display the updated total with two decimal places
}

document.getElementById('add').onclick = function(e) {
    e.preventDefault(); // Prevent default button behavior
    const valueToAdd = parseFloat(num.value); // Get the input value as a number

    
    if (!isNaN(valueToAdd) && valueToAdd > 0) { // Check if the value is a number
        totalSum += valueToAdd; // Update total sum
        updateResult();// Display the updated total
        num.value = ''; // Clear the input field
    } 
    else if (valueToAdd <= 0){
        resultDiv.innerHTML = ' <div class="error">Value can not be less 0r equal 0!</div>';
    }
    
    else {
        
        resultDiv.innerHTML = '<div class="error"> Please enter a valid number.</div>'; // Alert if input is invalid
    }
};

document.getElementById('plus').onclick = function(e){
    e.preventDefault();
    totalSum +=1;
    updateResult();
};

document.getElementById('minus').onclick = function(e){
    e.preventDefault();
   if(totalSum < 1){
    updateResult();
    resultDiv.innerHTML = ' <div class="error">Balance can not be less than 0!</div>'
   }
   
   if(totalSum >= 1){
    totalSum -= 1;
    updateResult();
    
   }
        
};


const hideBalance = document.getElementById('hide');

hideBalance.addEventListener('change', function() {
if (this.checked) {
resultDiv.textContent = '******';
}

else{
    updateResult();
}

});




// Get the password field and the checkbox element
const passwordField = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show_password');

// Add an event listener to the checkbox
showPasswordCheckbox.addEventListener('change', function() {
    // Toggle the type attribute between 'password' and 'text'
    if (this.checked) {
        passwordField.type = 'text'; // Show the password
    } else {
        passwordField.type = 'password'; // Hide the password
    }
});

const crealPassword = document.getElementById('clear');

crealPassword.addEventListener('change', function(){
    if(this.checked){
        password.value = '';
        
    }
});

