<?php
//This PHP page is responsible for destroying all the sessions when customer logout from the system.
//Student Name: Udara Gihanya Pragna Fernando
//Student Number: 101458383
session_start();
session_destroy();
header('Location: login.htm');
exit;
?>
