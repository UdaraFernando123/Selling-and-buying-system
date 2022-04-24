//This file is responsible for creating all the tags and create dynamic display of all the data in an auction.xml file items.
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
 
       
function loadXMLDoc() {

 xHRObject.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xHRObject.open("GET", "../data/auction.xml", true);
  xHRObject.send();
}


		
function myFunction(xml) {

  var i;
  var xmlDoc = xHRObject.responseXML;

  var x = xmlDoc.getElementsByTagName("item");
  for (i = 0; i <x.length; i++) { 
   
    var id= x[i].getElementsByTagName("itemID")[0].childNodes[0].nodeValue;
    var name=x[i].getElementsByTagName("itemName")[0].childNodes[0].nodeValue;
	var category= x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue;
    var description=x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
	var buynowprice= x[i].getElementsByTagName("buyItNowPrice")[0].childNodes[0].nodeValue;
    var bitprice=x[i].getElementsByTagName("bidPrice")[0].childNodes[0].nodeValue;
	var duration=x[i].getElementsByTagName("duration")[0].childNodes[0].nodeValue;
	var currentdate= x[i].getElementsByTagName("currentDate")[0].childNodes[0].nodeValue;
    var currenttime=x[i].getElementsByTagName("currentTime")[0].childNodes[0].nodeValue;
	var status=x[i].getElementsByTagName("status")[0].childNodes[0].nodeValue;
	
    var theevent = new Date(duration);
    var now = new Date();
    var sec_num = (theevent - now) / 1000;
    var days    = Math.floor(sec_num / (3600 * 24));
    var hours   = Math.floor((sec_num - (days * (3600 * 24)))/3600);
    var minutes = Math.floor((sec_num - (days * (3600 * 24)) - (hours * 3600)) / 60);
    var seconds = Math.floor(sec_num - (days * (3600 * 24)) - (hours * 3600) - (minutes * 60));

	
	var timeDiff = days; 
	
	 
	 
	 if(description.length > 30){
	 description=description.substring(0,30);
	 description+="....";
	 
	 }
	 
 
    var frame = document.getElementById("name");
	
	var first=document.createElement("div");
	var second=document.createElement("div");
	var third=document.createElement("div");
	var lable1=document.createElement("label");
	var lable2=document.createElement("label");
	var fourth=document.createElement("div");
	var fifth=document.createElement("div");
	var h5=document.createElement("h5");
	var b1 = document.createElement("INPUT");
	var b2 = document.createElement("INPUT");
	var h6= document.createElement("h5");
	  
	  
	  
	first.setAttribute("class", "group");
	first.setAttribute("name", "first");
	
	second.setAttribute("class", "row");
	second.setAttribute("name", "second");
	
	third.setAttribute("class", "col-25");
	third.setAttribute("name", "third");
	
	lable1.setAttribute("class", "name");
	lable1.innerHTML = "Item No: ";
	
	fourth.setAttribute("class", "col-75");
	fourth.setAttribute("name", "fourth");
	
	lable2.setAttribute("class", "value");
	lable2.innerHTML = id;
	
	
	fifth.setAttribute("class", "button");
	fifth.setAttribute("name", "fifth");
	
	h5.setAttribute("class", "time");
	h6.setAttribute("class", "time");
	
	b1.setAttribute("type", "submit");
	b1.setAttribute("class", "but");
	b1.value = "Place Bid";
	b1.name = "bid";
	b1.setAttribute("id", id);
	
	
	
	b2.setAttribute("type", "submit");
	b2.setAttribute("class", "buy");
	b2.setAttribute("id", id);
	b2.value = "Buy It Now";
	b2.name = "bid";

	
	frame.appendChild(first);
	first.appendChild(second);
	second.appendChild(third);
	third.appendChild(lable1);
	second.appendChild(fourth);
	fourth.appendChild(lable2);
	
	frame.appendChild(first);
	
	var second=document.createElement("div");
	var third=document.createElement("div");
	var lable1=document.createElement("label");
	var lable2=document.createElement("label");
	var fourth=document.createElement("div");
	
	second.setAttribute("class", "row");
	second.setAttribute("name", "second");
	
	third.setAttribute("class", "col-25");
	third.setAttribute("name", "third");
	
	lable1.setAttribute("class", "name");
	lable1.innerHTML = "Item Name: ";
	
	fourth.setAttribute("class", "col-75");
	fourth.setAttribute("name", "fourth");
	
	lable2.setAttribute("class", "value");
	lable2.innerHTML = name;
	
	
	first.appendChild(second);
	second.appendChild(third);
	third.appendChild(lable1);
	second.appendChild(fourth);
	fourth.appendChild(lable2);
	frame.appendChild(first);
	
	var second=document.createElement("div");
	var third=document.createElement("div");
	var lable1=document.createElement("label");
	var lable2=document.createElement("label");
	var fourth=document.createElement("div");
	
	second.setAttribute("class", "row");
	second.setAttribute("name", "second");
	
	third.setAttribute("class", "col-25");
	third.setAttribute("name", "third");
	
	lable1.setAttribute("class", "name");
	lable1.innerHTML = "Category: ";
	
	fourth.setAttribute("class", "col-75");
	fourth.setAttribute("name", "fourth");
	
	lable2.setAttribute("class", "value");
	lable2.innerHTML = category;
	
	
	first.appendChild(second);
	second.appendChild(third);
	third.appendChild(lable1);
	second.appendChild(fourth);
	fourth.appendChild(lable2);
	frame.appendChild(first);
	
	var second=document.createElement("div");
	var third=document.createElement("div");
	var lable1=document.createElement("label");
	var lable2=document.createElement("label");
	var fourth=document.createElement("div");
	
	second.setAttribute("class", "row");
	second.setAttribute("name", "second");
	
	third.setAttribute("class", "col-25");
	third.setAttribute("name", "third");
	
	lable1.setAttribute("class", "name");
	lable1.innerHTML = "Description: ";
	
	fourth.setAttribute("class", "col-75");
	fourth.setAttribute("name", "fourth");
	
	lable2.setAttribute("class", "value");
	lable2.innerHTML = description;
	
	
	first.appendChild(second);
	second.appendChild(third);
	third.appendChild(lable1);
	second.appendChild(fourth);
	fourth.appendChild(lable2);
	frame.appendChild(first);
	

	var second=document.createElement("div");
	var third=document.createElement("div");
	var lable1=document.createElement("label");
	var lable2=document.createElement("label");
	var fourth=document.createElement("div");
	
	second.setAttribute("class", "row");
	second.setAttribute("name", "second");
	
	third.setAttribute("class", "col-25");
	third.setAttribute("name", "third");
	
	lable1.setAttribute("class", "name");
	lable1.innerHTML = "Buy It Now Price: ";
	
	fourth.setAttribute("class", "col-75");
	fourth.setAttribute("name", "fourth");
	
	lable2.setAttribute("class", "value");
	lable2.innerHTML = buynowprice;
	
	
	first.appendChild(second);
	second.appendChild(third);
	third.appendChild(lable1);
	second.appendChild(fourth);
	fourth.appendChild(lable2);
	frame.appendChild(first);
	
	
	
	
	var second=document.createElement("div");
	var third=document.createElement("div");
	var lable1=document.createElement("label");
	var lable2=document.createElement("label");
	var fourth=document.createElement("div");
	
	second.setAttribute("class", "row");
	second.setAttribute("name", "second");
	
	third.setAttribute("class", "col-25");
	third.setAttribute("name", "third");
	
	lable1.setAttribute("class", "name");
	lable1.innerHTML = "Bid Price: ";
	
	fourth.setAttribute("class", "col-75");
	fourth.setAttribute("name", "fourth");
	
	lable2.setAttribute("class", "value");
	lable2.innerHTML = bitprice;
	
	
	b1.onclick = function () {

  var amount=0;
  var amount = prompt("Please enter your bid price:", "0");
   if (amount == null || amount == "") {
   alert("User cancelled the prompt.");
       
    }
	else{
  var itemno=this.id;

  

 xHRObject.open("GET", "b.php?itemno=" + encodeURIComponent(itemno) + 
			"&bprice=" + encodeURIComponent(amount) + 
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

b2.onclick = function () {

 
  var itemno=this.id;

  

 xHRObject.open("GET", "buy.php?itemno=" + encodeURIComponent(itemno) + 
			"&value=" + Number(new Date), true);


xHRObject.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
 var serverText = xHRObject.responseText;
	 alert(serverText);
    }
  };
 
 xHRObject.send(null); 
 
 
}

	var t = document.createTextNode(days+" days "+ hours+" hours " + minutes+" minutes and "+seconds+" seconds remaining");
    h5.appendChild(t);
	
	first.appendChild(second);
	second.appendChild(third);
	third.appendChild(lable1);
	second.appendChild(fourth);
	fourth.appendChild(lable2);
	first.appendChild(fifth);
	fifth.appendChild(h5);
	
	
	if(status=="in progress" && timeDiff>=0){
	fifth.appendChild(b1);
	fifth.appendChild(b2);
	frame.appendChild(first);
	}
	 else if( status=="sold"){
	 var text2 = document.createTextNode("The item has been sold");
     h6.appendChild(text2);
	  fifth.appendChild(h6);
	 frame.appendChild(first);
	 }
	 else if(timeDiff<0){
	
	 var text1 = document.createTextNode("Time has expired");
     h6.appendChild(text1);
	 fifth.appendChild(h6);
	 frame.appendChild(first);
	 }
	 }

}



		
   
		
		
		
       