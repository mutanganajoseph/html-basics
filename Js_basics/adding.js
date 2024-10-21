let totalSum = 0.00; // Initialize totalSum variable
const num = document.getElementById("num");
const resultDiv = document.getElementById("result");
const errorDiv = document.getElementById("error");
const hideBalance = document.getElementById('hide');
const hide = document.getElementById("hidebalance")

function updateResult() {
    if (hideBalance.checked) {
        resultDiv.textContent = '******'; // Show asterisks if hidden
    } else {
        resultDiv.textContent = `${totalSum.toFixed(2)}FRW`; // Display the updated total with two decimal places
    }
    errorDiv.textContent = ''; // Clear any previous error messages
}
document.getElementById('add').onclick = function(e) {
    e.preventDefault(); // Prevent default button behavior
    const valueToAdd = parseFloat(num.value); // Get the input value as a number

    
    if (!isNaN(valueToAdd) && valueToAdd > 0) { // Check if the value is a number
        totalSum += valueToAdd; // Update total sum
        updateResult();// Display the updated total
        num.value = ''; // Clear the input field
        errorDiv.value = '';
    } 
    else if (valueToAdd <= 0){
        errorDiv.textContent = "Value can not be less 0r equal 0!";
        
        
    }
    
    else {
        
        errorDiv.textContent = ' Please enter a valid number.'; // Alert if input is invalid
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
    errorDiv.textContent = "Balance can not be less than 0!";
   }
   
   if(totalSum >= 1){
    totalSum -= 1;
    updateResult();
    
   }
        
};




hideBalance.addEventListener('change', function() {
if (this.checked) {

}
updateResult();

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

