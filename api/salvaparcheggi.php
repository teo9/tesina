<?php

require "config.php";

mysqli_query($connessione , "delete from parcheggio where 1");
$p = json_decode($_POST['dati'] );

foreach( $p as $parcheggio )
{
    $nome =$parcheggio->nome; //$parcheggio["nome"];
    $x = $parcheggio->x;//$parcheggio['x'];
    $y = $parcheggio->y;//['y'];
    $queryInserimento = "insert INTO parcheggio (nome,x,y) VALUES ('".$nome."','".$x."','".$y."')";
    $query = mysqli_query($connessione,$queryInserimento) or print mysqli_error($connessione);
}
?>