<html>
<head>

</head>
<body>
<?
if(isset($_POST["name"]) && isset($_POST["surname"]) && isset($_POST["email"]) && isset($_POST["password"])){

  $doc = new DomDocument('1.0');
  $doc->load("customer.xml");
				$roottag= $doc->getElemantByTagName("details")->item(0);
				$customer = $doc->createElement("customer");
				

				$fn = $doc->createElement("FirstName",$_POST['name']); 
				$sn = $doc->createElement("Surname",$_POST["surname"]); 
				
				$customer->appendChild($fn);
				$customer->appendChild($sn);   
				
				   
				//$email = $doc->createElement("email",$_POST["email"]); 
				//$email = $customer->appendChild($email);   
				

				//$pw = $doc->createElement("password",$_POST["password"]);
				//$pw = $customer->appendChild($pw);
				
				$doc->save("customer.xml");
				
     }
?>




</body>
</html>