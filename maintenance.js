//This file is responsible send the user request to the correct php page according to the button press by the user.
//Student Name: Udara Gihanya Pragna Fernando
//Student Number: 101458383

var xHRObject = false;

if (window.XMLHttpRequest)
{
xHRObject = new XMLHttpRequest();
}
else if (window.ActiveXObject)
{
xHRObject = new ActiveXObject("Microsoft.XMLHTTP");
}


function generateReport() {

xHRObject.open("GET", "generateReport.php?&value=" + Number(new Date), true);


xHRObject.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

	  
	  var spantag = document.getElementById("example").innerHTML = xHRObject.responseText;
	  }
  };
 
 xHRObject.send(null); 
  
 
  
  
}


function processItems() {

xHRObject.open("GET", "processItems.php?&value=" + Number(new Date), true);


xHRObject.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
 var serverText = xHRObject.responseText;
	 alert(serverText);
    }
  };
 
 xHRObject.send(null); 
 
}