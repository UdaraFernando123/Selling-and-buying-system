<!-- This file is responsible recording the bid to the auction.xml file.-->
<!--Student Name: Udara Gihanya Pragna Fernando-->
<!--Student Number: 101458383-->
<?php
 if(isset($_REQUEST["itemno"]) && isset($_REQUEST["bprice"]))
 {
$itemno=$_REQUEST["itemno"];
$price=$_REQUEST["bprice"];
 
 session_start();
 $_SESSION["Login"];
 $id=$_SESSION["Login"]["id"];
 
 if(file_exists("../data/auction.xml")){
	$xml = new DOMDocument("1.0","UTF-8");
    $xml->load("../data/auction.xml");

$node = $xml->getElementsByTagName("item");

foreach ($node as $searchNode) {
    $customer = $searchNode->getElementsByTagName('customer')->item(0)->nodeValue;
    $itemID = $searchNode->getElementsByTagName('itemID')->item(0)->nodeValue;
    $itemName = $searchNode->getElementsByTagName('itemName')->item(0)->nodeValue;
    $category = $searchNode->getElementsByTagName('category')->item(0)->nodeValue;
	$description = $searchNode->getElementsByTagName('description')->item(0)->nodeValue;
    $startingPrice = $searchNode->getElementsByTagName('startingPrice')->item(0)->nodeValue;
    $reservePrice = $searchNode->getElementsByTagName('reservePrice')->item(0)->nodeValue;
    $buyItNowPrice = $searchNode->getElementsByTagName('buyItNowPrice')->item(0)->nodeValue;
	$bidPrice= $searchNode->getElementsByTagName('bidPrice')->item(0)->nodeValue;
	$duration = $searchNode->getElementsByTagName('duration')->item(0)->nodeValue;
    $status = $searchNode->getElementsByTagName('status')->item(0)->nodeValue;
    $currentDate = $searchNode->getElementsByTagName('currentDate')->item(0)->nodeValue;
	$currentTime = $searchNode->getElementsByTagName('currentTime')->item(0)->nodeValue;
    $bidderID = $searchNode->getElementsByTagName('bidderID')->item(0)->nodeValue; 
	 
if ($itemID == $_REQUEST["itemno"] ) 
{
if($bidderID<$_REQUEST["bprice"])
{
if($status=="in progress")
{
$searchNode->replaceChild($bidPrice, $price);
$searchNode->replaceChild($bidderID, $id);
$message="Thank you! Your bid is recorded in ShopOnline";
$xml->save("../data/auction.xml");
}
}
}
else{

$message="Sorry, your bid is not valid";

}
}

} 

}

echo $message; 
?>