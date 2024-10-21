document.getElementById("send").addEventListener("click", function() {
    // Get the input value
    var inputText = document.getElementById("enter").value;
    
    // Get the display element
    var displayDiv = document.getElementById("display");

    // Display the user's input as "Sent:"
    displayDiv.innerHTML += "<strong>Sent:</strong> " + inputText + "<br>";
    
    // Check if the input matches "*182#"
    if (inputText === "*182#") {
        // Display the USSD options as "Received:"
        displayDiv.innerHTML += '<strong>Received:</strong> ' +
                                '<div class="small_text">' +
                                "0. Fund my Wallet<br>" +
                                "1. Send Money<br>" +
                                "2. Buy Airtime/Packs (5% Cashback)<br>" +
                                "3. Cash-out<br>" +
                                "4. Payments<br>" +
                                "5. Account/PIN<br>" +
                                "6. Bank Services<br>" +
                                "7. Gaming<br>" +
                                "8. Airtel Pay<br>" +
                                "00. Next<br>" +
                                '</div>';
    } else {
        // If the input is something else, display a generic response as "Received:"
        displayDiv.innerHTML += '<strong>Received:</strong> <div class="small_text"> Invalid input. Please try again.</div><br> ';
    }

    // Clear the input field after sending
    document.getElementById("enter").value = '';
});
