<?php 

require "config.php";

mysqli_query($connessione , "delete from entrata where 1");
if(!isset($_POST['entrate']))
    die("errore, non siconosce la variabile post");
$p = json_decode($_POST['entrate'] );

foreach( $p as $entrata )
{
    $x = $entrata->x;//['x'];
    $y = $entrata->y;//['y'];
    $queryInserimento = "insert INTO entrata (x,y) VALUES ('".$x."','".$y."')";
    $query = mysqli_query($connessione,$queryInserimento) or print mysqli_error($connessione);
}

?>