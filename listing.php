<html>
<!-- This file is responsible for getting all the input data from the html page and store that in a auction.xml file.-->
<!--Student Name: Udara Gihanya Pragna Fernando-->
<!--Student Number: 101458383-->
 <?php

if(isset($_REQUEST["iname"]) && isset($_REQUEST["category"]) && isset($_REQUEST["description"])
 && isset($_REQUEST["startprice"]) && isset($_REQUEST["reserveprice"]) && isset($_REQUEST["byitnowprice"])
  && isset($_REQUEST["day"]) && isset($_REQUEST["time"]) && isset($_REQUEST["minutes"])
 
 )
 {
 
$currentDate = date('Y-m-d');
$currentTime = date('H:i:s');
$days=$_REQUEST["day"];
$hours=$_REQUEST["time"];
$mins=$_REQUEST["minutes"];
$duration = constructDuration($days, $hours, $mins);

 session_start();
 $_SESSION["Login"];
 $id=$_SESSION["Login"]["id"];
			
 

if(file_exists("auction.xml")){
	$xml = new DOMDocument("1.0","UTF-8");
    $xml->load("auction.xml");
	
	$rootTag = $xml->getElementsByTagName("items")->item(0);
	
	
	 $dataTag = $xml->createElement("item");
 
$xp = new DOMXPath($xml);
$value= $xp->evaluate('count(//item/itemID)');
$itemid=$value+1;
 $aTag = $xml->createElement("customerID",$_SESSION["Login"]["id"]);
 $bTag = $xml->createElement("itemID","100".$itemid);
 $cTag = $xml->createElement("itemName",$_REQUEST['iname']);
 $dTag = $xml->createElement("category",$_REQUEST['category']);
 $eTag = $xml->createElement("description",$_REQUEST['description']);
 $fTag = $xml->createElement("startingPrice",$_REQUEST['startprice']);
 $gTag = $xml->createElement("reservePrice",$_REQUEST["reserveprice"]);
 $hTag = $xml->createElement("buyItNowPrice",$_REQUEST['byitnowprice']);
 $iTag = $xml->createElement("bidPrice",$_REQUEST['startprice']);
 $jTag = $xml->createElement("duration",$duration);
 $kTag = $xml->createElement("status","in progress");
 $lTag = $xml->createElement("currentDate",$currentDate);
 $mTag = $xml->createElement("currentTime",$currentTime);
 $nTag = $xml->createElement("bidderID","0");
 
 
 $dataTag->appendChild($aTag);
 $dataTag->appendChild($bTag);
 $dataTag->appendChild($cTag);
 $dataTag->appendChild($dTag);
 $dataTag->appendChild($eTag);
 $dataTag->appendChild($fTag);
 $dataTag->appendChild($gTag);
 $dataTag->appendChild($hTag);
 $dataTag->appendChild($iTag);
 $dataTag->appendChild($jTag);
 $dataTag->appendChild($kTag);
 $dataTag->appendChild($lTag);
 $dataTag->appendChild($mTag);
 $dataTag->appendChild($nTag);
 
 
 $rootTag->appendChild($dataTag);
// $message="Thank you! Your item has been listed in ShopOnline. The item number is 100".$itemid .", and the bidding starts now: ".$currentTime." on ".$currentDate;
 $xml->save("auction.xml");
 
}
else{
 $xml = new DOMDocument("1.0","UTF-8");
 $myfile = fopen("auction.xml", "w") or die("Unable to open file!");
 $xml->load("auction.xml");
 

 $rootTag = $xml->createElement("items");
 $rootTag = $xml->appendChild($rootTag);
 $dataTag = $xml->createElement("item");
 $dataTag = $rootTag->appendChild($dataTag);
 
$aTag = $xml->createElement("customerID",$_SESSION["Login"]["id"]);
 $bTag = $xml->createElement("itemID","1001");
 $cTag = $xml->createElement("itemName",$_REQUEST['iname']);
 $dTag = $xml->createElement("category",$_REQUEST['category']);
 $eTag = $xml->createElement("description",$_REQUEST['description']);
 $fTag = $xml->createElement("startingPrice",$_REQUEST['startprice']);
 $gTag = $xml->createElement("reservePrice",$_REQUEST["reserveprice"]);
 $hTag = $xml->createElement("buyItNowPrice",$_REQUEST['byitnowprice']);
 $iTag = $xml->createElement("bidPrice",$_REQUEST['startprice']);
 $jTag = $xml->createElement("duration",$duration);
 $kTag = $xml->createElement("status","in progress");
 $lTag = $xml->createElement("currentDate",$currentDate);
 $mTag = $xml->createElement("currentTime",$currentTime);
 $nTag = $xml->createElement("bidderID","0");
 
 
 $dataTag->appendChild($aTag);
 $dataTag->appendChild($bTag);
 $dataTag->appendChild($cTag);
 $dataTag->appendChild($dTag);
 $dataTag->appendChild($eTag);
 $dataTag->appendChild($fTag);
 $dataTag->appendChild($gTag);
 $dataTag->appendChild($hTag);
 $dataTag->appendChild($iTag);
 $dataTag->appendChild($jTag);
 $dataTag->appendChild($kTag);
 $dataTag->appendChild($lTag);
 $dataTag->appendChild($mTag);
 $dataTag->appendChild($nTag);
 
 $rootTag->appendChild($dataTag);
//$message="Thank you! Your item has been listed in ShopOnline. The item number is 1001, and the bidding starts now: ".$currentTime." on ".$currentDate;
 
 $xml->save("auction.xml");
  $message="Thank you! Your item has been listed in ShopOnline. The item number is 1001, and the bidding starts now: ".$currentTime." on ".$currentDate;
 }

 
 

session_start();
 $_SESSION["message"];
 $_SESSION["message"]=array();

 $_SESSION["message"]["day"]=$currentDate;
 $_SESSION["message"]["time"]=$currentTime;
 $_SESSION["message"]["id"]=$id;
 
}
else{
$message="Please fill all the input fields";
}



function constructDuration($days, $hours, $minutes)
{
 $durationToAdd = "P" . $days . "D" . "T" .$hours ."H" . $minutes . "M";
 $result = new DateTime(date('Y-m-d H:i:s'));
 $result->add(new DateInterval($durationToAdd));
 $result = $result->format('Y-m-d H:i:s');

 return $result;
}
 echo $message;
?>
				

</body>
</html>










