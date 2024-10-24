 let user = prompt("username ");
 let pass = prompt("Password ");
const error = document.getElementById("error");



function clear(){
    error.textContent ='';

}

document.getElementById("user_name").addEventListener("input", clear);
document.getElementById("password").addEventListener("input", clear);




document.getElementById("login").onclick = function(e){
    e.preventDefault();

    
    const user_name = document.getElementById("user_name").value.trim();
    const password = document.getElementById("password").value.trim();

    const left_side = document.getElementById("left_side");

    if(!user_name || !password){
        error.textContent ="No user set!";
        
    }
    else if(user_name !== user || password !== pass){
        error.textContent ='Invalid username or password!';
    }

    else{

        left_side.textContent = `Hello ${user_name}! You loged in successfully!`;

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
            <input type="button" value="Create Account" id="create_account" style="width:100%;">
            <p>
             <div class="error" id="error"></div>
            <div class="create">
             Have account? <a href="4side.html" id="login">Login</a>
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
            left_side.innerHTML = `<h3>Account created successfully for ${new_user_name}!</h3>`;
        } else {
            error.textContent = 'Please fill in all fields!';
        }
    };

};