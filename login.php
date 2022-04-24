<?php
//This PHP page is responsible for creating session using login information.
//Student Name: Udara Gihanya Pragna Fernando
//Student Number: 101458383
session_start();
 $_SESSION["Login"];
 $_SESSION["Login"]=array();

 
 $email= $_REQUEST["email"];
 $password=$_REQUEST["password"];
 $id=$_REQUEST["id"];
			
 $_SESSION["Login"]["id"]=$id;
 $_SESSION["Login"]["email"]=$email;
 $_SESSION["Login"]["password"]=$password;
			
?>