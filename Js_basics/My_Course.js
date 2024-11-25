let myButton = document.getElementById("changeUser"); // Target the Change User button directly
let myHeading = document.querySelector("h1");
let error = document.getElementById("error"); // Element to display error messages
// Calculator Logic
const num1 = document.getElementById('num1'); 
const num2 = document.getElementById('num2');
const resultDiv = document.getElementById('result');

function showError(message) {
    error.textContent = message; // Display the error message
}

// Clear previous error messages
function clearError() {
    resultDiv.textContent ='';
    error.textContent = '';
}

document.getElementById('sum').onclick = function(e) {
    e.preventDefault();
    clearError(); // Clear previous errors

    // Check for empty inputs
    if (!num1.value || !num2.value) {
        showError("Please check your input."); // Show error message
        return; // Exit the function if inputs are invalid
    }

    resultDiv.textContent = `Sum: ${parseFloat(num1.value)} + ${parseFloat(num2.value)} = ${parseFloat(num1.value) + parseFloat(num2.value)}`;
};

document.getElementById('difference').onclick = function(e) {
    e.preventDefault();
    clearError(); // Clear previous errors

    // Check for empty inputs
    if (!num1.value || !num2.value) {
        showError("Please check your input.");
        return;
    }

    resultDiv.textContent = `Difference: ${parseFloat(num1.value)} - ${parseFloat(num2.value)} = ${parseFloat(num1.value) - parseFloat(num2.value)}`;
};

document.getElementById('product').onclick = function(e) {
    e.preventDefault();
    clearError(); // Clear previous errors

    // Check for empty inputs
    if (!num1.value || !num2.value) {
        showError("Please check your input.");
        return;
    }

    resultDiv.textContent = `Product: ${parseFloat(num1.value)} * ${parseFloat(num2.value)} = ${parseFloat(num1.value) * parseFloat(num2.value)}`;
};

document.getElementById('division').onclick = function(e) {
    e.preventDefault();
    clearError(); // Clear previous errors

    // Check for empty inputs
    if (!num1.value || !num2.value) {
        showError("Please check your input.");
        return;
    }

    if (parseFloat(num2.value) === 0) {
        resultDiv.innerHTML = '<div class="error">Cannot divide by zero!</div>';
    } else {
        resultDiv.textContent = `Division: ${parseFloat(num1.value)} / ${parseFloat(num2.value)} = ${parseFloat(num1.value) / parseFloat(num2.value)}`;
    }
};

// Set user name function
function setUserName() {
    let myName = prompt("Who is Calculating?");
    while (!myName) { // Keep prompting until a valid name is entered
        myName = prompt("Who is Calculating?");
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `Web calculator is cool, ${myName}`;
}

// Check for stored name on page load
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Web calculator is cool, ${storedName}`;
}

// Change User button click event
myButton.onclick = setUserName;
