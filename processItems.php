<!-- This file is responsible for determine the status of the items based on the time left and select the final bit price for items-->
<!--Student Name: Udara Gihanya Pragna Fernando-->
<!--Student Number: 101458383-->

<?php
 if(file_exists("../../data/auction.xml")){
	$xml = new DOMDocument("1.0","UTF-8");
    $xml->load("../../data/auction.xml");

$node = $xml->getElementsByTagName("item");

foreach ($node as $searchNode) {

   
	$description = $searchNode->getElementsByTagName('description')->item(0)->nodeValue;
    $startingPrice = $searchNode->getElementsByTagName('startingPrice')->item(0)->nodeValue;
    $reservePrice = $searchNode->getElementsByTagName('reservePrice')->item(0)->nodeValue;
    $buyItNowPrice = $searchNode->getElementsByTagName('buyItNowPrice')->item(0)->nodeValue;
	$bidPrice= $searchNode->getElementsByTagName('bidPrice')->item(0)->nodeValue;
	$duration = $searchNode->getElementsByTagName('duration')->item(0)->nodeValue;
    $status = $searchNode->getElementsByTagName('status')->item(0)->nodeValue;
    $startDate = $searchNode->getElementsByTagName('currentDate')->item(0)->nodeValue;
	$startTime = $searchNode->getElementsByTagName('currentTime')->item(0)->nodeValue;
    


if($status=="in progress")
{
date_default_timezone_set("Australia/Melbourne");
$currentDate = date('Y-m-d');
$currentTime = date('H:i:s');
$time=$currentDate."".$currentTime;

date_default_timezone_set("Australia/Melbourne");
$changecurrenttime = new DateTime($time);
$currentdatetime= $changecurrenttime->format('Y/m/d H:i:s');


date_default_timezone_set("Australia/Melbourne");
	$changeuserdt = new DateTime($duration);
	$changeduration= $changeuserdt->format('Y/m/d H:i:s');

if($currentdatetime>$changeduration){
   
if($bidPrice<$reservePrice){
 
 
$searchNode->getElementsByTagName('status')->item(0)->nodeValue="fail";
$xml->save("../../data/auction.xml");
$message="Your action is completed successfully";
 }
else if($bidPrice>$reservePrice){ 
$searchNode->getElementsByTagName('status')->item(0)->nodeValue="sold";
$xml->save("../../data/auction.xml");
 $message="Your action is completed successfully";
  } 

}



}
}



if (!isset($message)) {
    $message="There is no expired items"; 
}
echo $message;
}
?>