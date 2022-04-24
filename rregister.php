<html>
<!-- This file is responsible for adding customer details to the xml file to register new customer with the system.-->
<!--Student Name: Udara Gihanya Pragna Fernando-->
<!--Student Number: 101458383-->
 <?php

if(isset($_REQUEST["name"]) && isset($_REQUEST["surname"]) && isset($_REQUEST["email"]) && isset($_REQUEST["password"])){

if(file_exists("../../data/customer.xml")){
	$xml = new DOMDocument("1.0","UTF-8");
    $xml->load("../../data/customer.xml");
	
	$rootTag = $xml->getElementsByTagName("details")->item(0);
	
	
	 $dataTag = $xml->createElement("customer");
 
$xp = new DOMXPath($xml);
$value= $xp->evaluate('count(//customer/id)');
$id=$value+1;
$to= $_REQUEST['email'];       
$subject="Welcome to ShopOnline!";
$message="Dear ".",".$_REQUEST['name']." welcome to use ShopOnline! Your customer id is: ".$id."and the password is: " .$_REQUEST['password'].".";                        
$header="From registration@shoponline.com.au";
mail($to, $subject, $message, $header); 

 $aaTag = $xml->createElement("id",$id);
 $aTag = $xml->createElement("firstname",$_REQUEST['name']);
 $bTag = $xml->createElement("surname",$_REQUEST['surname']);
 $cTag = $xml->createElement("email",$_REQUEST['email']);
 $dTag = $xml->createElement("password",$_REQUEST['password']);
 
 $dataTag->appendChild($aaTag);
 $dataTag->appendChild($aTag);
 $dataTag->appendChild($bTag);
 $dataTag->appendChild($cTag);
 $dataTag->appendChild($dTag);
 
 $rootTag->appendChild($dataTag);
 
 $xml->save("../../data/customer.xml");
}
else{
 $xml = new DOMDocument("1.0","UTF-8");
 $myfile = fopen("../../data/customer.xml", "w") or die("Unable to open file!");
 $xml->load("../../data/customer.xml");
 

 $rootTag = $xml->createElement("details");
 $rootTag = $xml->appendChild($rootTag);
 $dataTag = $xml->createElement("customer");
 $dataTag = $rootTag->appendChild($dataTag);
 
 $aaTag = $xml->createElement("id","1");
 $aTag = $xml->createElement("firstname",$_REQUEST['name']);
 $bTag = $xml->createElement("surname",$_REQUEST['surname']);
 $cTag = $xml->createElement("email",$_REQUEST['email']);
 $dTag = $xml->createElement("password",$_REQUEST['password']);
 
 $id="1";
 
$to= $_REQUEST['email'];       
$subject="Welcome to ShopOnline!";
$message="Dear ".",".$_REQUEST['name']." welcome to use ShopOnline! Your customer id is: ".$id."and the password is: " .$_REQUEST['password'].".";                        
$header="From registration@shoponline.com.au";
mail($to, $subject, $message, $header); 
 
 $dataTag->appendChild($aaTag);
 $dataTag->appendChild($aTag);
 $dataTag->appendChild($bTag);
 $dataTag->appendChild($cTag);
 $dataTag->appendChild($dTag);
 
 $rootTag->appendChild($dataTag);
 
 $xml->save("../../data/customer.xml");
 }
}

?>
				

</body>
</html>










