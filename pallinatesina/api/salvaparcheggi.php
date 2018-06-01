<?php
$connessione = mysqli_connect("localhost","root", "", "gestionale");
$nome=$_GET["nome"];
$x = $_GET["x"];
$y = $_GET["y"];
$w = $_GET["w"];
$h = $_GET["h"];
$queryInserimento = "insert INTO parcheggio (nome,x,y,w,h) VALUES ('".$nome."','".$x."','".$y."','".$w."','".$h."')";
$query = mysqli_query($connessione,$queryInserimento);
$x = $x + ($w / 4);
$y = $y + ($h / 2);
$response = array('stato' => "ok" , 'nome' => "$nome" , "x" => "$y" , "y" => "$y");
echo json_encode($response);
?>