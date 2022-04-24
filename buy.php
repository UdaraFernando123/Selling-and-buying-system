<?php

if(isset($_REQUEST["itemno"])){

$itemno=$_REQUEST["itemno"];

session_start();
if(isset($_SESSION["Login"]["id"]) && !empty($_SESSION["Login"]["id"])) {
   $cid=$_SESSION["Login"]["id"];

 if(file_exists("auction.xml")){
	$xml = new DOMDocument("1.0","UTF-8");
    $xml->load("auction.xml");

$node = $xml->getElementsByTagName("item");

foreach ($node as $searchNode) {

    $customer = $searchNode->getElementsByTagName("customerID")->item(0)->nodeValue;
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
 

$searchNode->getElementsByTagName('bidPrice')->item(0)->nodeValue=$buyItNowPrice;
$searchNode->getElementsByTagName('bidderID')->item(0)->nodeValue=$cid;
$searchNode->getElementsByTagName('status')->item(0)->nodeValue="sold";
$xml->save("auction.xml");
$message="Thank you for purchasing this item.";





}

}}

if (!isset($message)) {
    $message="Sorry, Please Try again"; 
}


echo $message;
}else{
echo"Your session has expired please login again";
}
}
?>