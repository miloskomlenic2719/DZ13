<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
    include("functions.php");
    if(isset($_POST['isbn']) && isset($_POST['name']) && isset($_POST['genre'])){
    $isbn = $_POST['isbn'];
    $name = intval($_POST['name']);
    $genre = intval($_POST['genre']);
    echo addBook($isbn,$name,$genre);
    }
?>