//  let user = prompt("username ");
//  let pass = prompt("Password ");
const error = document.getElementById("error");



function clear(){
    error.textContent ='';
    error_search.textContent = '';
    result_search.textContent = '';

}

document.getElementById("user_name").addEventListener("input", clear);
document.getElementById("password").addEventListener("input", clear);




document.getElementById("login").onclick = function(e){
    e.preventDefault();

    
    const user_name = document.getElementById("user_name").value.trim();
    const password = document.getElementById("password").value.trim();

    const left_side = document.getElementById("left_side");

    const second = document.getElementById("second");
    const secon = document.getElementById("secon");
    const seco = document.getElementById("seco");
    const sec = document.getElementById("sec");
    const se = document.getElementById("se");
    if(!user_name || !password){
        error.textContent ="No user set!";
        
    }
    else if(user_name !== user || password !== pass){
        error.textContent ='Invalid username or password!';
    }

    else{

        second.textContent = `Hello ${user_name}! You loged in successfully!`;
        secon.textContent = `Hello ${user_name}! You loged in successfully!`;
        seco.textContent = `Hello ${user_name}! You loged in successfully!`;
        sec.textContent = `Hello ${user_name}! You loged in successfully!`;
        se.innerHTML = `Hello ${user_name}! You loged in successfully!
        <a href="4side.html">Back</a>`;
        left_side.textContent  = `Hello ${user_name}! You loged in successfully!`;
    }
       
};


document.getElementById("create").onclick = function(e) {
    e.preventDefault();
    const left_side = document.getElementById("left_side");
    const error = document.getElementById("error");

    // Clear current content
    left_side.innerHTML = '';

    // Create registration form
    left_side.innerHTML = `
        <h3>Create an Account</h3>
        <form>
            <label for="new_user_name">Username:</label>
            <p>
            <input type="text" id="new_user_name" placeholder="Enter username..." required>
            <p>
            <label for="new_password">Password:</label>
            <p>
            <input type="password" id="new_password" placeholder="Enter password..." required>
            <p>
            <input type="button" value="Create Account" id="create_account" style="width:60%;">
            <p>
             <div class="error" id="error"></div>
            <div class="create">
             Have account? <a href="4side.html" id="login" style="color:blue;">Login</a>
        </div>
           
        </form>
    `;

    // Handle the create account button
    document.getElementById("create_account").onclick = function() {
        const new_user_name = document.getElementById("new_user_name").value.trim();
        const new_password = document.getElementById("new_password").value.trim();
        const error = document.getElementById("error");


        
        // Add your logic to handle account creation (e.g., storing the new user credentials)
        // For demonstration, just log the details
        if (new_user_name && new_password) {
            console.log(`Account created for: ${new_user_name}`);
            left_side.innerHTML = `Account created successfully for ${new_user_name}!
             <a href="#1">Back</a>`;
        } else {
            error.textContent = 'Please fill in all fields!';
        }
    };

};

const result = document.getElementById("result");
let currentInput = "";
let previousResult = null;
let operator = null;

function updateResultDisplay() {
    result.textContent = currentInput || "0"; // Show 0 if no input
}

function handleNumberClick(value) {
    currentInput += value;
    updateResultDisplay();
}

function handleOperatorClick(op) {
    if (currentInput === "" && previousResult !== null) {
        // Allow chaining operators after a result
        operator = op;
        currentInput = previousResult.toString(); // Start with previous result
    } else if (currentInput !== "") {
        // Prevent multiple operators in a row
        const lastChar = currentInput[currentInput.length - 1];
        if ("+-x÷".includes(lastChar)) {
            currentInput = currentInput.slice(0, -1); // Remove last operator if it's an operator
        }
        operator = op;
    }
    currentInput += op; // Append operator
    updateResultDisplay();
}

function calculateResult() {
    if (currentInput) {
        // Replace x and ÷ with * and /
        const formattedInput = currentInput.replace(/x/g, '*').replace(/÷/g, '/');
        try {
            const calculation = eval(formattedInput); // Use eval to calculate the result
            previousResult = calculation; // Store the result for future calculations
            result.textContent = calculation;
            currentInput = ""; // Clear input after calculation
        } catch (error) {
            result.textContent = "Error"; // Handle any errors
        }
    }
}

function handleBackspace() {
    currentInput = currentInput.slice(0, -1); // Remove last character
    updateResultDisplay();
}

function clearCalculator() {
    currentInput = ""; // Clear current input
    previousResult = null; // Reset previous result
    operator = null; // Reset operator
    updateResultDisplay(); // Update display
}

// Event Listeners for number buttons
document.querySelectorAll('.number').forEach(button => {
    button.onclick = function() {
        handleNumberClick(button.value);
    };
});

// Event Listeners for operator buttons
document.querySelectorAll('.operator').forEach(button => {
    button.onclick = function() {
        handleOperatorClick(button.value);
    };
});

// Event Listener for equal button
document.getElementById("equal").onclick = function() {
    calculateResult();
};

// Event Listener for backspace button
document.getElementById("backspace").onclick = function() {
    handleBackspace();
};

// Event Listener for clear button
document.getElementById("clear").onclick = function() {
    clearCalculator();
};

// const word = document.getElementById("word");
// document.getElementById("search").onclick = function(e){
//     e.preventDefault();

    
//     word.value = "Hey! this is search icon!"
// }

// document.getElementById("mic").onclick = function(e){
//     e.preventDefault();

    
//     word.value = "Hey! this is micro icon!"
// }





const searchInput = document.getElementById('word');
const searchIcon = document.getElementById('search');
const error_search = document.getElementById("error_search");
const result_search = document.getElementById("result_search");

document.getElementById("word").addEventListener("input", clear);


// Function to handle the search
function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
        result_search.textContent = (`Searching for: ${query}`);
        // Here, you could replace the console.log with any search processing logic, like an API call
        // For example: searchDatabase(query);
    } else {
        error_search.textContent ='Please enter a search term';
    }
}

// Trigger search when Enter is pressed in the input field
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// Trigger search when the search icon is clicked
searchIcon.addEventListener('click', performSearch);
