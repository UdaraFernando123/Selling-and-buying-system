//This file use to validate all the inputs and redirect new users to registration page.
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

function validateData(){
		
		 if( document.RegisterForm.email.value == "") 
         {
            alert( "Please provide your Email!" );
			 document.RegisterForm.email.focus() ;
            return false;
         }
			
		  if ((document.RegisterForm.email.value.indexOf("@")) < 1 || (( document.RegisterForm.email.value.lastIndexOf(".") - document.RegisterForm.email.value.indexOf("@") < 2 )) )
         {
            alert("Please enter correct email")
            document.RegisterForm.email.focus() ;
            return false;
         }
           
	      if( document.RegisterForm.password.value == "" ||
         isNaN( document.RegisterForm.password.value ) ||
         document.RegisterForm.password.value.length != 5 )
         {
            alert( "Please provide a five digit number as the password in the format of #####." );
            document.RegisterForm.password.focus() ;
            return false;
         }	
		 
			var email = document.RegisterForm.email.value;
			var password = document.RegisterForm.password.value;
		
		 
		
		if(email !="" && password !="" ){

		this.checkEmail();
		
	}

}


function checkEmail()
{

	var xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
	
    if (this.readyState == 4 ){
	
	if( this.status == 200) {
	
	
     myFunction(this);
	
    }
	else {
	
	
	alert("Please register before login to the system");
	
	}
	}
};
xhttp.open("GET", "customer.xml", true);
xhttp.send();

}

function myFunction(xml) {
  var x, i, xmlDoc, result,id;
    xmlDoc = xml.responseXML;
    result=false;
	var registerEmail,registerPassword;
    x = xmlDoc.getElementsByTagName('customer');
   var e = document.RegisterForm.email.value;
  var p = document.RegisterForm.password.value;
   for(var i = 0; i < x.length; i++) {
    var user = x[i];
	var cusid = user.getElementsByTagName("id");
    var email = user.getElementsByTagName("email");
	var password = user.getElementsByTagName("password");
	
    for(var j = 0; j < email.length; j++) {
	for(var y = 0; y < password.length; y++){
     for(var a = 0; a < cusid.length; a++) { 
	  
	 
	  if((email[j].childNodes[0].nodeValue==e) && (password[y].childNodes[0].nodeValue==p))
	  {
	 
	 
	  var id=cusid[a].childNodes[0].nodeValue;
	  result=true;
	  }
	  
	}
	}
}	
	}
	if(result==true)
	{
	
	xHRObject.open("GET", "login.php?email=" + encodeURIComponent(e) +"&password=" + encodeURIComponent(p) + "&id=" + encodeURIComponent(id) + "&value=" + Number(new Date), true);
	xHRObject.send(null);
	window.location.replace("bidding.htm");
	
	
	}
	else
	{
	alert("Sorry your email address or password is invalid");
	
	}
		
  }
	
	

   
		
		
		
       