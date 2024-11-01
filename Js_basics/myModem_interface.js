const area = document.getElementById("area");
const home = document.getElementById("home");
const ussd = document.getElementById("ussd");
const sms = document.getElementById("sms");
const setting = document.getElementById("setting");
const update = document.getElementById("update");
const statistics = document.getElementById("statistics");




document.getElementById("home").onclick = function(e){
    e.preventDefault();

    const area = document.getElementById("area");
area.innerHTML = '';

area.innerHTML = `<footer>
    <div class="signal">
        <i class="fas fa-signal"></i> </div>
        <div class="Three_G">3G</div>

        <div class="airtel"><j>Airtel</j>
            <p>
            Connected<br>

            <a href="">Connection Settings</a>
            <div class="box">
                <i class="fas fa-arrow-up"></i>
                <i class="fas fa-arrow-down"></i>
                
                <div class="line"></div>
            </div>
        </div>
   
</footer>
<div class="end"></div>

    </div>

    <div class="data_bar">
    <p>Current connection</p>
    <ul>
        <li>Rececived/sent:<result>Unknown</result></li>
        <li>Duration:<result>00:00:00</result></li>
        <li>My number:    <result>Unknown</result></li>

    </ul>
</div>

`;

    home.style.backgroundColor =' rgb(100, 202, 250)'
    statistics.style.backgroundColor = '#4d545a';
    sms.style.backgroundColor = '#4d545a';
    ussd.style.backgroundColor = '#4d545a';
    update.style.backgroundColor = '#4d545a';
    setting.style.backgroundColor = '#4d545a';


}


document.getElementById("statistics").onclick = function(e){
    e.preventDefault();



    area.innerHTML = ``;







    statistics.style.backgroundColor =' rgb(100, 202, 250)'
    home.style.backgroundColor = '#4d545a';
    sms.style.backgroundColor = '#4d545a';
    ussd.style.backgroundColor = '#4d545a';
    update.style.backgroundColor = '#4d545a';
    setting.style.backgroundColor = '#4d545a';

}



document.getElementById("sms").onclick =  function(e){
    e.preventDefault();





    area.innerHTML = ``;





    sms.style.backgroundColor =' rgb(100, 202, 250)'
    home.style.backgroundColor = '#4d545a';
    statistics.style.backgroundColor = '#4d545a';
    ussd.style.backgroundColor = '#4d545a';
    update.style.backgroundColor = '#4d545a';
    setting.style.backgroundColor = '#4d545a';
}






document.getElementById("ussd").onclick = function(e){
   
    
    area.innerHTML = `
    <div class="ussd_place">
        <div class="left_side">
            <div class="ussdName"> USSD <details><summary>
               
            </summary>
        </details>
        <div class="riht_arrow">
            <i class="fas fa-arrow-right"></i> <h4> Check Servise</4>
        </div>
            </div>
            </div>
        
        
    <div class="service_place">  
    <div class="check_service">Check Services</div>
    <div class="display" id="display">  </div>
    <div class="command">Enter a command or select a command from the drop-down list box.</div>
<div class="write">
    <input type="text" id="enter" >
    <div class="drop_down" id="drop_down">
    <i class="fas fa-play"></i>
 </div>
    <button class="send" id="send">Send</button>
</div>
<div class="imput_input" id="imput_input"></div>
</div> 
</div>


    `
    
    ;


   
document.getElementById("send").addEventListener("click", function() {
    // Get the input value
    const inputText = document.getElementById("enter").value.trim();
    const displayDiv = document.getElementById("display");
    const imputInput = document.getElementById("imput_input");
   

    

    function clear(){
        imputInput.innerHTML = '';
    }
    
    
    document.getElementById("enter").addEventListener("input", clear)

    if(!inputText){
        
        imputInput.innerHTML = `No command entered or the command entered is formatted incorrectly.`;
        return;
    }

    displayDiv.innerHTML +=`<strong>Sent:</strong> <div class="sent">${inputText}</div>`;
    
    if(inputText){
    if(inputText === "*182#"){
       
        displayDiv.innerHTML +=`<b>Recaived:</b>
        <div class="small_text">
            0. Fund my Wallet<br>
            1. Send Money<br> 
            2. Buy Airtime/Packs (5% Cashback)<br>
            3. Cash-out<br> 
            4. Payments<br>
            5. Account/PIN<br> 
            6. Bank Services<br> 
            7. Gaming<br>
            8. Airtel Pay<br>
            00. Next<br>
            </div>`;

    }

    else{
        
        
        displayDiv.innerHTML +=`<b>Recaived:</b> <div class="small_text"> Service not found! Try Again</div><p>`;  
    }
    
    displayDiv.scrollTop = displayDiv.scrollHeight;


    

    
    // Clear the input field after sending
    document.getElementById("enter").value = '';

}});



    ussd.style.backgroundColor =' rgb(100, 202, 250)'
    home.style.backgroundColor = '#4d545a';
    statistics.style.backgroundColor = '#4d545a';
    sms.style.backgroundColor = '#4d545a';
    update.style.backgroundColor = '#4d545a';
    setting.style.backgroundColor = '#4d545a';
    


}



document.getElementById("update").onclick = function(e){
    e.preventDefault();

    area.innerHTML = ``;



    update.style.backgroundColor =' rgb(100, 202, 250)'
    home.style.backgroundColor = '#4d545a';
    statistics.style.backgroundColor = '#4d545a';
    sms.style.backgroundColor = '#4d545a';
    ussd.style.backgroundColor = '#4d545a';
    setting.style.backgroundColor = '#4d545a';

}


document.getElementById("setting").onclick = function(e){
    e.preventDefault();


  area.innerHTML = ``;


    setting.style.backgroundColor =' rgb(100, 202, 250)'
    home.style.backgroundColor = '#4d545a';
    statistics.style.backgroundColor = '#4d545a';
    sms.style.backgroundColor = '#4d545a';
    ussd.style.backgroundColor = '#4d545a';
    update.style.backgroundColor = '#4d545a';
}




