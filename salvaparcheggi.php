<?php
$connessione = mysqli_connect("localhost","root", "", "gestionale");
$nome=$_GET["nome"];
$x = $_GET["x"];
$y = $_GET["y"];
$w = $_GET["w"];
$h = $_GET["h"];
$queryInserimento = "insert INTO parcheggio (nome,x,y,w,h) VALUES ('".$nome."','".$x."','".$y."','".$w."','".$h."')";
$query = mysqli_query($connessione,$queryInserimento);
$response = array('stato' => "ok" , 'nome' => "$nome" );
echo json_encode($response);
?>