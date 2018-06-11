<?php

$connessione = mysqli_connect("localhost","root", "", "gestionale");
$ris = mysqli_query($connessione , "delete from collegamento where 1");
$p = json_decode($_POST['dati'] );

foreach( $p as $collegamento )
{
    echo " CIAO ";
    var_dump($collegamento);
    $distanza = $collegamento->distanza; 
    $a = $collegamento->Parcheggio_a;
    $b = $collegamento->Parcheggio_b;
    $queryInserimento = "insert INTO collegamento (distanza,Parcheggio_a,Parcheggio_b) VALUES ('$distanza','$a','$b')";
    $queryInserimento = "insert INTO collegamento (distanza,Parcheggio_a,Parcheggio_b) VALUES ('$distanza','$b','$a')";
    $query = mysqli_query($connessione,$queryInserimento) or print mysqli_error($connessione);
}
?>