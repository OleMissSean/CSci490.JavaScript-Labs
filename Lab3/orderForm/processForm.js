/*
  processForm.js
  Sean Staz
  CSci 490 ~ Special Topics: JavaScript
*/

function processForm() 
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
}
