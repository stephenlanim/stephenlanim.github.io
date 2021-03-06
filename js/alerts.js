/* ======================================
    Alert Message Scripts

      Note: Styles can be found in alert.css
   ====================================== */

// Function for creating an alert message
function alertMessage(alertType, appendTo, message) {

  // create div element for alert message
  let $alertDiv = $('<div></div>');

  // add class and ID to alert message for styling and DOM manipulation
  $alertDiv.attr('class', `${alertType}`).attr('id', `${alertType}`);

  // Insert message text into alert message
  $alertDiv.html(message);

  // Append alert message to placeholder indicated
  $alertDiv.appendTo('#' + `${appendTo}`);

  // Start alert message as hidden upon page load, then display it
  $('#' + `${alertType}` + '')
    .hide()
    .slideDown(500);

  // When alert message is clicked...
  $alertDiv.on('click', function(){

    // Slide up alert message
    $alertDiv.slideUp(500);

    // Remove alert message from DOM after 3 seconds
    setTimeout( () => {$alertDiv.remove();}, 3000);

  });

}

/* ===== Visitor Message ===== */
const visitorMsg1 = '<span><strong>Note:</strong> The clients at UNC-Wilmington have temporarily shut down their servers in preparation for Hurricane Florence. The web pages for these projects will once again be viewable when the servers are restored. <strong>The Practice Projects in the next section are live and ready to view.</strong></span> <span class="close-x">&times;</span>';

// Create an alert message box, place it before the gallery of client projects, and insert the above alert message.
// alertMessage('warning', 'clientProjectAlerts', visitorMsg1);
