// Copy to clipboard function
/*
* @param { selector } is the CSS selector of the text to copy -> mandatory
* @param { notiID } is the return notification class -> optional, pass "skip" to skip notification
* @param { msg } is the return notification message -> optional, pass "skip" to skip setting the message
* @param { time } is in millisecond for displaying message -> optional, pass "skip" to skip hiding the notification
* @param { bg_color } is the background color of the selected text -> optional, pass "skip" to skip changing the background color
*/
function copyData(selector, notiID = "neutral_success", msg = "Copied successfully.", time = 3000, bg_color = "#d9f2f7") {
  // Determine if the selector is an ID or class
  let element;
  if (selector.startsWith('#')) {
    element = document.querySelector(selector); // It's an ID
  } else if (selector.startsWith('.')) {
    element = document.querySelector(selector); // It's a class
  } else {
    element = document.querySelector('#' + selector); // Assume it's an ID if no prefix is given
  }
  
  // Check if the element exists
  if (element) {
    var copyContent = element.textContent;
    
    // Create a temporary input element
    var tempInput = document.createElement("input");
    
    // Set its value to the text content you want to copy
    tempInput.value = copyContent;
    
    // Append it to the body (not visible)
    document.body.appendChild(tempInput);
    
    // Select the text in the temporary input element
    tempInput.select();
    
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    
    // Remove the temporary input element from the body
    document.body.removeChild(tempInput);
    
    // Conditionally add background color to the copied text 
    if (bg_color !== "skip") {
      element.style.backgroundColor = bg_color;
    }
    
    // Conditionally handle notification
    if (notiID !== "skip") {
      var notiElem = document.querySelector('.' + notiID);

      if (notiElem) {
        // Conditionally set the innerHTML of the notification element
        if (msg !== "skip") {
          notiElem.innerHTML = msg;
        }

        // Display the notification element
        notiElem.style.display = "block";

        // Conditionally set a timeout to hide the notification element
        if (time !== "skip") {
          setTimeout(function() {
            notiElem.style.display = "none";
          }, time);
        }
      }
    }
  } else {
    console.error(`Element not found for selector: ${selector}`);
  }
}
