<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "books";

$conn = new mysqli($servername, $username, $password, $db);

if (!$conn->set_charset("utf8")) {
    printf("Error loading character set utf8: %s\n", $mysqli->error);
    exit();
}
?>