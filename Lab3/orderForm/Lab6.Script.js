/*
  Lab6.Script.js
  Sean Staz
  CSci 490 ~ Special Topics: JavaScript
*/

// modeled after contact.js
// Establish functionality on window load:
window.onload = function() 
{
    'use strict';
	// Create the Ajax object to be used for the exchange of data
	var ajax = getXMLHttpRequestObject();
   
	// Set up call back function for the readyState changes
   // note: using an anonymous function vs. 
   //        from the example ajax.onreadystatechange = handleAjaxResponse;
	ajax.onreadystatechange = function() 
	{
     if (ajax.readyState == 4) 
	    {
		    if ( (ajax.status >= 200 && ajax.status < 300) 
		                         || (ajax.status == 304) ) 
  	  {
				var data = ajax.responseText;
				var str = '  ';
				str += data + '<br>';
    		           document.getElementById('output').innerHTML = str;
		    } else { // Status error!
				document.getElementById('output').innerHTML = 'Error: ' + ajax.statusText;
		    } // if ajax.status
		} // End of if readyState ==4
	}; // End of onreadystatechange anonymous function.
   
   
   // Now add an event handler for the form's submission which will collect the data
    // Replaces handler established by html as 
    // 'onsubmit="processForm();return false;"'
	
	
    document.getElementById('aForm').onsubmit = function() 
	{
     console.log("processing form data");     
     var name = document.getElementById("name").value;
     var x = document.getElementsByName("radioGrp");
     var selectItem = document.getElementById("selectItem").value;
     var x = document.getElementsByName("radioGrp");
     var i;
     var radioGrp=' ';
     for (i = 0; i < x.length; i++) {
          if (x[i].checked) {
             radioGrp =  x[i].value;
          }
      }
      var data = "name="        + encodeURIComponent(name) +
                 "&radioGrp="   + encodeURIComponent(radioGrp) +
                 "&selectItem=" + encodeURIComponent(selectItem);
      console.log(data);
      document.getElementById('output').innerText = 'Testing' + data
    	// Open the request:
		ajax.open('POST', 'resources/Lab6.php', true);
		ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		ajax.send(data);
		return false;
	}; // End of onsubmit function.
	
}; // End of onload function.
