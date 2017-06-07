<?php
header('Access-Control-Allow-Methods: GET, POST');
include("functions.php");
if(isset($_POST['isbn']) && isset($_POST['name']) && isset($_POST['genre']) && isset($_POST['id'])){

$isbn = $_POST['isbn'];
$name = intval($_POST['name']);
$genre = intval($_POST['genre']);
$id = intval($_POST['id']);

echo updateBook($isbn,$name,$genre,$id);
}

?>
