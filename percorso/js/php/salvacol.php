<?php

require "configu.php";

mysqli_query($connessione , "delete from collegamento where 1");
$p = json_decode($_POST['dati'] );

foreach( $p as $collegamento )
{
    $distanza =$collegamento->distanza; 
    $a = $parcheggio->Parcheggio_a;
    $b = $parcheggio->Parcehggio_b;
    $queryInserimento = "insert INTO collegamento (distanza,Parcheggio_a,Parcheggio_b) VALUES ('".$distanza."','".$a."','".$b."')";
    $query = mysqli_query($connessione,$queryInserimento) or print mysqli_error($connessione);
}
?>