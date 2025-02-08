const area = document.getElementById("area");
const home = document.getElementById("home");
const ussd = document.getElementById("ussd");
const sms = document.getElementById("sms");
const setting = document.getElementById("setting");
const update = document.getElementById("update");
const statistics = document.getElementById("statistics");


home.style.backgroundColor = ' rgb(100, 202, 250)';


document.getElementById("envelope").addEventListener("mouseover", function(){
    const envelo = document.getElementById("envelo")
    envelo.style.display = "block";
});

document.getElementById("signal").addEventListener("mouseover", function(){
    const three = document.getElementById("three")
    three.style.display = "block";

});

document.getElementById("data").addEventListener("mouseover", function(){
    const wan = document.getElementById("wan")
    wan.style.display = "block";

});

document.getElementById("envelope").addEventListener("mouseout", function(){
    const envelo = document.getElementById("envelo")
    envelo.style.display = "none";
});

document.getElementById("signal").addEventListener("mouseout", function(){
    const three = document.getElementById("three")
    three.style.display = "none";

});

document.getElementById("data").addEventListener("mouseout", function(){
    const wan = document.getElementById("wan")
    wan.style.display = "none";

});


document.getElementById("home").onclick = function(e) {
    e.preventDefault();

    area.innerHTML = '';

    area.innerHTML = ` 
      <div class="home_field">

        <div class="signal_icon">
            <i class="fas fa-signal"></i>    
        </div>

        <div class="three_g">3G</div>

        <div class="home_airtel">
            <strong>AIRTEL</strong>
            <div class="connected">
                connected
            </div>
                <p>
                <a href="#">connection Settings</a>
                </p> 

                <div class="dataBox">
                    <i class="fas fa-arrow-down"></i>
                    <i class="fas fa-arrow-up"></i>
                    <div class="line">

                    </div>
                </div>
        </div>
    </div>

    <div class="end"></div>

    <div class="data_bar">
    <p>Current connection</p>
    <ul>
        <li>Rececived/sent:<div class="result" id="data_result">Unknown</div></li>
        <li>Duration:<div class="result" id="data_result">00:00:00</div></li>
        <li> My number:    <div class="result" id="data_result">Unknown</div></li>

    </ul>
</div>
    `;

    // Change background colors for main sections
    home.style.backgroundColor = 'rgb(100, 202, 250)';


    home.addEventListener('mouseenter', function() {
        home.style.backgroundColor = 'rgb(100, 202, 250)';
    });
    // home.addEventListener('mouseleave', function() {
    //     home.style.backgroundColor = 'rgb(100, 202, 250)';
    // });

    statistics.addEventListener('mouseenter', function() {
        statistics.style.backgroundColor = 'rgb(100, 202, 250)';
    });
    statistics.addEventListener('mouseleave', function() {
        statistics.style.backgroundColor = '#4d545a';
    });
    
    sms.addEventListener('mouseenter', function() {
        sms.style.backgroundColor = 'rgb(100, 202, 250)';
    });
    sms.addEventListener('mouseleave', function() {
        sms.style.backgroundColor = '#4d545a';
    });
    
    ussd.addEventListener('mouseenter', function() {
        ussd.style.backgroundColor = 'rgb(100, 202, 250)';
    });
    ussd.addEventListener('mouseleave', function() {
        ussd.style.backgroundColor = '#4d545a';
    });
    
    update.addEventListener('mouseenter', function() {
        update.style.backgroundColor = 'rgb(100, 202, 250)';
    });
    update.addEventListener('mouseleave', function() {
        update.style.backgroundColor = '#4d545a';
    });
    
    setting.addEventListener('mouseenter', function() {
        setting.style.backgroundColor = 'rgb(100, 202, 250)';
    });
    setting.addEventListener('mouseleave', function() {
        setting.style.backgroundColor = '#4d545a';
    });
    

}



document.getElementById("statistics").onclick = function(e){
    e.preventDefault();



    area.innerHTML = `<div class="statistic">
        <div class="stat_field">

            <div class="stat_field_head">
                Mobile Network
            </div>

            <div class="stat">
            <p>
                Monthly data Usage</p>
            <input type="button" value="Edit">
                <div class="dataUsageBar">
                    <li>Duration:00:00:00</li>
                    <div class="longBar"></div>
                      
                    <div class="total"><li>Used:0MB</li>Total:0MB</div>
                </div>
            </div>
             <div class="stats">
              <p>Total data Usage</p>  
              <div class="dataUsage">
                <li>Duration:00:00:00</li>
               
                <li>Used:0MB</li> 
            </div>   
             </div>
        

        </div> <!--closing srtatistic_form-->

        <div class="statEnd">Volume statistics provided here are approximate. For accurate statistics and details of charges refer to your bills.
        </div>

        <div class="clearHistory">
            <input type="button" value="Clear History">
            <div class="lastCleared">Last cleared: 2024-01-11</div>
        </div>

    </div> <!--closing statistics-->
`;

    statistics.style.backgroundColor =' rgb(100, 202, 250)'
    home.style.backgroundColor = '#4d545a';
    sms.style.backgroundColor = '#4d545a';
    ussd.style.backgroundColor = '#4d545a';
    update.style.backgroundColor = '#4d545a';
    setting.style.backgroundColor = '#4d545a';

}


document.getElementById("ussd").onclick = function(e){
   
    
    area.innerHTML = `
    <div class="ussd_place">

        <div class="left_side">
            <div class="ussdName"> USSD 
               <details><summary></summary>
                <div class="show">
                    <i class="fas fa-arrow-right"></i> <h4> Check Servise</4></div>
                    </details>
            </div>
            </div>

        
    <div class="check_service"> <p>Check Services</p>
    <div class="display_field">
    <div class="display" id="display">  </div>
    
    <div class="select_command"><p>Enter a command or select a command from the drop-down list box.</p>
    <div class="command">
    <input type="text" id="enter" >
    <div class="drop_down">
    <i class="fas fa-play" id="drop_down"></i>
    </div>
    <select id="options">
        <option value="">Select</option>
        <option value="*182#">*182#</option>
        <option value="*255#">*255#</option>
        <option value="*131#">*131#</option>
        <option value="*345#">*345#</option>
        <option value="*151#">*151#</option>
    </select>
    </div>
    
    <button class="send" id="send">Send</button>
    </div>
    <div class="imput_input" id="imput_input"></div>
</div>
    
    </div>
    </div>
    `;




document.getElementById("options").style.display = "none";

document.getElementById("drop_down").addEventListener("mouseover", function(){
    document.getElementById("options").style.display = "block";
    });
    

document.getElementById("drop_down").addEventListener("mouseout", function(){
    document.getElementById("options").style.display = "none";
    });

document.getElementById("options").addEventListener("mouseenter", function(){
    document.getElementById("options").style.display = "block";
    });

document.getElementById("options").addEventListener("mouseout", function(){
    document.getElementById("options").style.display = "none";
    });
        
    
document.getElementById("options").addEventListener("click", function(){
    const inputText = document.getElementById("enter");
    inputText.value = options.value
    document.getElementById("options").style.display = "none";
});
        

document.getElementById("send").addEventListener("click", function() {
   
    const inputText = document.getElementById("enter").value.trim();
    const displayDiv = document.getElementById("display");
    const imputInput = document.getElementById("imput_input");
   

    function clear(){
        imputInput.innerHTML = '';
    }
    
    
    document.getElementById("enter").addEventListener("click", clear)

    if(!inputText){
        
        imputInput.innerHTML = `No command entered or the command entered is formatted incorrectly.`;
        return;
    }
    displayDiv.innerHTML +=`<strong>Sent:</strong> <div class="sent">${inputText}</div>`;
    
    if(inputText){
    if(inputText === "*182#" || inputText === "*255#"){
        
       
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

}

});

    ussd.style.backgroundColor =' rgb(100, 202, 250)'
    home.style.backgroundColor = '#4d545a';
    statistics.style.backgroundColor = '#4d545a';
    sms.style.backgroundColor = '#4d545a';
    update.style.backgroundColor = '#4d545a';
    setting.style.backgroundColor = '#4d545a';
    

}





document.getElementById("update").onclick = function(e){
    e.preventDefault();

    area.innerHTML = `<div class="updates">
        <div class="updates_head">
            Update
        </div>
        <div class="update_field">
            Check for updates failed. <a href="#">Retry?</a>
        </div>
    </div>`;



    update.style.backgroundColor =' rgb(100, 202, 250)'
    home.style.backgroundColor = '#4d545a';
    statistics.style.backgroundColor = '#4d545a';
    sms.style.backgroundColor = '#4d545a';
    ussd.style.backgroundColor = '#4d545a';
    setting.style.backgroundColor = '#4d545a';

}


document.getElementById("setting").onclick = function(e){
    e.preventDefault();


  area.innerHTML = ` <div class="settings">
        <div class="options">
        <div class="setting_options"> Dial_Up</div>
            <details><summary> </summary>
                <div class="show">
               <i class="fas fa-arrow-right"></i> <b>Mobile Connection</b> </li>
                <li>Profile Management</li>
                <li>Network Settings</li> 
            </div>    
           </details>
           <div class="setting_options"> Security </div><details><summary></summary>
            <div class="show"><li>PIN Management</li> </div>  </details>

        <div class="setting_options">System </div><details><summary></summary>
            <div class="show"><li>Device Informtion</li>
        <li>Restore Dfaulte</li>
        <li>Reboot</li> </div>   </details>

    </div> <!--Closing Options-->

    <div class="setting_result">

        <div class="mobile_head">
            Mobile Connection
        </div>
         <div class="make_space">
        <div class="mobile_data">
            Mobile connection
        </div>

        <p>Mobile data</p>
        <div class="turn_off">
        <input type="button" value="Turn Off"></div>
        <p>When the mobile network is turned on, the device connects to the network automatically.</p>
        <div class="roaming">
            Data roaming:
            <div class="enable">
             <input type="radio">Enable <input type="radio"> Disable</div>
        </div>

        <div class="disconnect">
            Auto Disconnect Interval(Min):
          <select name="second" id="second">
            <option value="10">10</option>
            <option value="30">30</option>
            <option value="60">60</option>
            <option value="120">120</option>
          </select>
        </div>

        <div class="apply">
            <input type="button" value="Apply">
        </div>
    </div>

    </div>
        
    </div> <!--closing settings-->`;


    setting.style.backgroundColor =' rgb(100, 202, 250)'
    home.style.backgroundColor = '#4d545a';
    statistics.style.backgroundColor = '#4d545a';
    sms.style.backgroundColor = '#4d545a';
    ussd.style.backgroundColor = '#4d545a';
    update.style.backgroundColor = '#4d545a';
}




document.getElementById("sms").onclick =  function(e){
    e.preventDefault();
    const area = document.getElementById("area");

    area.innerHTML = ` 
    <div class="message">
        <div class="labels">
            <div class="inbox" id="inbox">
                Inbox
                <div class="inbox_number"> 0/0</div>
            </div> <!--closing inbox-->

            <div class="outbox" id="outbox">
                Outbox
                <div class="outbox_number" > 0/0</div>
            </div> <!--Closing outbox-->

            <div class="drafts"  id="draft">
                Drafts
                <div class="drafts_number">0/0</div>
            </div> <!--closing Drafts-->

            <div class="sms_settings" id="sms_settings">
                SMS Settings
            </div>
        </div>

        <div class="result_message" id="result_message">
            <div class="inbox_message">
                <p>Inbox</p>
                <div class="inbox_field">
                    <div class="button_field">
                        <input type="button" value="New Message">
                        <input type="button" value="Delete">
                        <input type="button" value="Import">
                    </div>
                    <div class="inbox_content">
                        <table>
                            <th><input type="checkbox" name="message" id=""></th>
                            <th>Number</th>
                            <th>content</th>
                            <th>Date</th>
                        </table>
                        <div class="page">
                            <div class="play_left"><i class="fas fa-angle-left"> </i></div> 
                            <div class="rotate_left"> <i class="fas fa-play"> </i></div>
                            <div class="pageNumber">1</div>
                            <div class="rotate_right">  <i class="fas fa-play"></i></div>
                            <div class="play_right">  <i class="fas fa-angle-right"></i></div>
                        </div>
                        <div class="go">
                            <b>0/0</b>
                            <b>Page: </b>
                            <input type="text" id="number_page">
                            <input type="button" value="Go">
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    </div>
`;




    sms.style.backgroundColor =' rgb(100, 202, 250)'
    home.style.backgroundColor = '#4d545a';
    statistics.style.backgroundColor = '#4d545a';
    ussd.style.backgroundColor = '#4d545a';
    update.style.backgroundColor = '#4d545a';
    setting.style.backgroundColor = '#4d545a';


    setupMessage();

}


function setupMessage(){

document.getElementById("inbox").addEventListener("click", function() {
    const result_message = document.getElementById("result_message");
    result_message.innerHTML = ` 
            <div class="inbox_message">
                <p>Inbox</p>
                <div class="inbox_field">
                    <div class="button_field">
                        <input type="button" value="New Message">
                        <input type="button" value="Delete">
                        <input type="button" value="Import">
                    </div>
                    <div class="inbox_content">
                        <table>
                            <th><input type="checkbox" name="message" id=""></th>
                            <th>Number</th>
                            <th>content</th>
                            <th>Date</th>
                        </table>
                        <div class="page">
                            <div class="play_left"><i class="fas fa-angle-left"> </i></div> 
                            <div class="rotate_left"> <i class="fas fa-play"> </i></div>
                            <div class="pageNumber">1</div>
                           <div class="rotate_right">  <i class="fas fa-play"></i> </div>
                           <div class="play_right">  <i class="fas fa-angle-right"></i></div>
                        </div>
                        <div class="go">
                            <b>0/0</b>
                            <b>Page: </b>
                            <input type="text" id="number_page">
                            <input type="button" value="Go">
                        </div>
                    </div>
                </div>
            </div>
`;

});


document.getElementById("outbox").addEventListener("click", function() {
   

    const result_message = document.getElementById("result_message");
     

     result_message.innerHTML = ` <div class="outbox_message">
                <p>
                    Outbox
                </p>
                <div class="outbox_field">
                    <div class="button_field">
                        <input type="button" value="New Message">
                        <input type="button" value="Delete">
                        <input type="button" value="Import">
                    </div>
                    <div class="outbox_content">
                        <table>
                            <th><input type="checkbox" name="message" id=""></th>
                            <th>Number</th>
                            <th>content</th>
                            <th>Date</th>
                        </table>
                        <div class="page">
                            <div class="play_left"><i class="fas fa-angle-left"> </i></div> 
                            <div class="rotate_left"> <i class="fas fa-play"> </i></div>
                            <div class="pageNumber">1</div>
                            <div class="rotate_right">  <i class="fas fa-play"></i> </div>
                            <div class="play_right">  <i class="fas fa-angle-right"></i></div>
                        </div>
                        <div class="go">
                            <b>0/0</b>
                            <b>Page: </b>
                            <input type="text" id="number_page">
                            <input type="button" value="Go">
                        </div>
                    </div>
                </div>
            </div>
            `;

});


document.getElementById("draft").addEventListener("click", function() {
    const result_message = document.getElementById("result_message");

     result_message.innerHTML = ` 
     <div class="draft_message">
                <p>
                    Drafts
                </p>
                <div class="draft_field">
                    <div class="button_field">
                        <input type="button" value="New Message">
                        <input type="button" value="Delete">
                        <input type="button" value="Import">
                    </div>
                    <div class="draft_content">
                        <table>
                            <th><input type="checkbox" name="message" id=""></th>
                            <th>Number</th>
                            <th>content</th>
                            <th>Date</th>
                        </table>
                        <div class="page">
                            <div class="play_left"><i class="fas fa-angle-left"> </i></div> 
                            <div class="rotate_left"> <i class="fas fa-play"> </i></div>
                            <div class="pageNumber">1</div>
                            <div class="rotate_right">  <i class="fas fa-play"></i> </div>
                            <div class="play_right">  <i class="fas fa-angle-right"></i></div>
                        </div>
                        <div class="go">
                            <b>0/0</b>
                            <b>Page: </b>
                            <input type="text" id="number_page">
                            <input type="button" value="Go">
                        </div>
                    </div>
                </div>
            </div>
            
        `;

});

}


