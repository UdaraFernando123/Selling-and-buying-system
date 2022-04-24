//This file is responsible for validating all the given input and send those for processing to the php file.
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


function loadCategory(){


var cat=document.getElementById("category");
	var xHRObject = new XMLHttpRequest();
	
	xHRObject.onreadystatechange = function() {
	
    if (this.readyState == 4 ){
	
	if( this.status == 200) {
	var  xmlDoc = xHRObject.responseXML;
	x = xmlDoc.getElementsByTagName('category');
	
	var select = document.getElementById("category");
    
	for (i = 0 ; i <x.length; i++) {
	var xmlvalue=x[i].childNodes[0].nodeValue ;
	  var m;
	 for (m = 0; m < select.length; m++) {
	
      var txt = select.options[m].text;
	  if(xmlvalue!=txt){
	  var option = document.createElement("option");
	  option.text =x[i].childNodes[0].nodeValue ;
	  cat.add(option);
	   }
    }
   }
	var option = document.createElement("option");
	option.text = "Other";
	cat.add(option);
	
	}
	else {
	var option = document.createElement("option");
	option.text = "Other";
	cat.add(option);
	
	}
	}
};
xHRObject.open("GET", "auction.xml", true);
xHRObject.send();

}


function validateData(){
		
		if( document.ListingForm.iname.value == "" )
         {
            alert( "Please provide an Item Name!" );
            document.ListingForm.iname.focus() ;
            return false;
         }
         
         if( document.ListingForm.category.value == "" )
         {
            alert( "Please select Category!" );
            document.ListingForm.category.focus() ;
            return false;
         }
		
		   if( document.ListingForm.description.value == "") 
         {
            alert( "Please provide Description!" );
			 document.ListingForm.description.focus() ;
            return false;
         }
		   if( document.ListingForm.sp1.value == "") 
         {
            alert( "Please provide Starting Price!" );
			 document.ListingForm.sp1.focus() ;
            return false;
         }
		  if( document.ListingForm.sp2.value == "") 
         {
            alert( "Please provide Starting Price" );
			 document.ListingForm.sp2.focus() ;
            return false;
         }
		  if( document.ListingForm.rp1.value == "") 
         {
            alert( "Please provide Reserve Price" );
			 document.ListingForm.rp1.focus() ;
            return false;
         }
		 if( document.ListingForm.rp2.value == "") 
         {
		  alert( "Please provide Reserve Price" );
			 document.ListingForm.rp2.focus() ;
          
            return false;
         }
		 
		  if( document.ListingForm.bp1.value == "") 
         {
            alert( "Please provide Buy It Now Price" );
			 document.ListingForm.bp1.focus() ;
            return false;
         }
		  if( document.ListingForm.bp2.value == "") 
         {
            
            alert( "Please provide Buy It Now Price" );
			 document.ListingForm.bp2.focus() ;
            return false;
         }
		 if( document.ListingForm.day.value == "" || document.ListingForm.day.value=="d") 
         {
            alert( "Please provide the Day!" );
			 document.ListingForm.day.focus() ;
            return false;
         }
		 if( document.ListingForm.time.value == "" || document.ListingForm.time.value=="hour") 
         {
            alert( "Please provide an Hour!");
			 document.ListingForm.time.focus() ;
            return false;
         }
		  if( document.ListingForm.Min.value == "" || document.ListingForm.Min.value=="min") 
         {
            alert( "Please provide the Minutes!");
			 document.ListingForm.Min.focus() ;
            return false;
         } 
			var iname  =document.ListingForm.iname.value;
			var category=document.ListingForm.category.value;
			var description=document.ListingForm.description.value;
			var sp1=document.ListingForm.sp1.value;
			var sp2=document.ListingForm.sp2.value;
			var rp1=document.ListingForm.rp1.value;
			var rp2=document.ListingForm.rp2.value;
			var bp1=document.ListingForm.bp1.value;
			var bp2=document.ListingForm.bp2.value;
			var day=document.ListingForm.day.value;
			var time=document.ListingForm.time.value;
			var min=document.ListingForm.Min.value;
			
			var startprice=sp1+"."+sp2;
			var reserveprice=rp1+"."+rp2;
			var nowprice=bp1+"."+bp2;
			
			if(startprice>reserveprice){
			alert("The start price must be less than the reserve price"); 
			return false;
			}
			if(reserveprice>nowprice){
			alert("The reserve price must be less than the buy-it-now price"); 
			return false;
			}
			if(iname!="" && category!="" && description!="" && sp1!="" && sp2!="" && rp1!="" && rp2!="" && bp1!="" && bp2!="" && day !="" && time!="" && min!="")
			{
		
			xHRObject.open("GET", "listing.php?iname=" + encodeURIComponent(iname) + 
			"&category=" + encodeURIComponent(category) + "&description=" + encodeURIComponent(description) +
			"&startprice=" + encodeURIComponent(startprice) + "&reserveprice=" + encodeURIComponent(reserveprice) +
			"&byitnowprice=" + encodeURIComponent(nowprice) + "&day=" + encodeURIComponent(day) +
			"&time=" + encodeURIComponent(time) + "&minutes=" + encodeURIComponent(min) +
			"&value=" + Number(new Date), true);
			xHRObject.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			var serverText = xHRObject.responseText;
			alert(serverText);
			}
			};
			xHRObject.send(null);   
			}
			
		}


		
   
		
		
		
       