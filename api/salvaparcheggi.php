<?php
$connessione = mysqli_connect("localhost","root", "", "gestionale");
$p = json_decode($_POST['dati']);

foreach( $p as $parcheggio )
{
    $pp = json_decode($parcheggio);
    $nome = $parcheggio["nome"];
    $x = $parcheggio['x'];
    $y = $parcheggio['y'];
    $queryInserimento = "insert INTO parcheggio (nome,x,y,w,h) VALUES ('".$nome."','".$x."','".$y."','".$_POST['w']."','".$_POST['h']."')";
    $query = mysqli_query($connessione,$queryInserimento);
}

$x = $x + ($w / 4);
$y = $y + ($h / 2);
$response = array('stato' => "ok" , 'nome' => "$nome" , "x" => "$y" , "y" => "$y");
echo json_encode($response);
?>