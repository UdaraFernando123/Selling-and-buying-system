//This file use to validate all the inputs and send data to the php page to perform registration
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
		
		if( document.RegisterForm.name.value == "" )
         {
            alert( "Please provide your Name!" );
            document.RegisterForm.name.focus() ;
            return false;
         }
         
         if( document.RegisterForm.surname.value == "" )
         {
            alert( "Please provide your Surname!" );
            document.RegisterForm.surname.focus() ;
            return false;
         }
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
			 if( document.RegisterForm.confirm.value == "" ||
         isNaN( document.RegisterForm.confirm.value ) ||
         document.RegisterForm.confirm.value.length != 5 )
         {
            alert( "Please provide a five digit number as the confirm password in the format of #####." );
			 document.RegisterForm.confirm.focus() ;
            return false;
         }
		  if( document.RegisterForm.password.value != document.RegisterForm.confirm.value){
		    alert( "Password and Confirm password should be the same" );
			 document.RegisterForm.confirm.focus() ;
            return false;
			}
			
			
			var name  = document.RegisterForm.name.value;
			var surname = document.RegisterForm.surname.value;
			var email = document.RegisterForm.email.value;
			var password = document.RegisterForm.password.value;
		
		 
		
		if(name !="" && surname !="" && email !="" && password !="" ){

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
	
	registerCustomer();
	alert("congratulations...! You have registered with the ShopOnline");
	
	}
	}
};
xhttp.open("GET", "../../data/customer.xml", true);
xhttp.send();

}

function myFunction(xml) {
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
   var email = document.RegisterForm.email.value;
   
    x = xmlDoc.getElementsByTagName('email');
	var result=true;
    for (i = 0 ; i <x.length; i++) {
        
		if(x[i].childNodes[0].nodeValue==email){
		result=false;
		}
			}
		if(result==true){
		
		this.registerCustomer();
		alert("congratulations...! You have registered with the ShopOnline");
		
		}
		else if(result==false){
		
		alert("Sorry your email address is already exist in the system ");
		
		}
		
  }
	
	
function registerCustomer(){
			
			var name  = document.RegisterForm.name.value;
			var surname = document.RegisterForm.surname.value;
			var email = document.RegisterForm.email.value;
			var password = document.RegisterForm.password.value;
			xHRObject.open("POST", "rregister.php?name=" + encodeURIComponent(name) + "&surname=" + encodeURIComponent(surname) + "&email=" + encodeURIComponent(email) +"&password=" + encodeURIComponent(password) +"&value=" + Number(new Date), true);
		    xHRObject.send(null); 
			
			
			
			


}
   
		
		
		
       