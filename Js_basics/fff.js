// Handle the SMS section click
document.getElementById("sms").onclick = function(e) {
    e.preventDefault();

    // Inject SMS content into the area div
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
                <p>
                    Inbox
                </p>
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
                            <div class="rotate_right"> <i class="fas fa-play"></i> </div>
                            <div class="play_right"> <i class="fas fa-angle-right"></i></div>
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
    </div>`;

    // Change background colors for SMS section
    sms.style.backgroundColor = 'rgb(100, 202, 250)';
    home.style.backgroundColor = '#4d545a';
    statistics.style.backgroundColor = '#4d545a';
    ussd.style.backgroundColor = '#4d545a';
    update.style.backgroundColor = '#4d545a';
    setting.style.backgroundColor = '#4d545a';

    // Add event listeners for the Inbox, Outbox, and Draft sections
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
                            <th>Content</th>
                            <th>Date</th>
                        </table>
                        <div class="page">
                            <div class="play_left"><i class="fas fa-angle-left"> </i></div> 
                            <div class="rotate_left"> <i class="fas fa-play"> </i></div>
                            <div class="pageNumber">1</div>
                            <div class="rotate_right"> <i class="fas fa-play"></i> </div>
                            <div class="play_right"> <i class="fas fa-angle-right"></i></div>
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
        result_message.innerHTML = ` 
            <div class="outbox_message">
                <p>Outbox</p>
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
                            <th>Content</th>
                            <th>Date</th>
                        </table>
                        <div class="page">
                            <div class="play_left"><i class="fas fa-angle-left"> </i></div> 
                            <div class="rotate_left"> <i class="fas fa-play"> </i></div>
                            <div class="pageNumber">1</div>
                            <div class="rotate_right"> <i class="fas fa-play"></i> </div>
                            <div class="play_right"> <i class="fas fa-angle-right"></i></div>
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
                <p>Drafts</p>
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
                            <th>Content</th>
                            <th>Date</th>
                        </table>
                        <div class="page">
                            <div class="play_left"><i class="fas fa-angle-left"> </i></div> 
                            <div class="rotate_left"> <i class="fas fa-play"> </i></div>
                            <div class="pageNumber">1</div>
                            <div class="rotate_right"> <i class="fas fa-play"></i> </div>
                            <div class="play_right"> <i class="fas fa-angle-right"></i></div>
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
