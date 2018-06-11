<?php 

require "config.php";

if(!isset($_POST['entrate']))
    die("errore, non siconosce la variabile post");
    
$p = json_decode($_POST['entrate'] );
$g = true;

foreach( $p as $entrata )
{
    $x = $entrata->x;//['x'];
    $y = $entrata->y;//['y'];
    $n = $x .':'. $y;
    $queryInserimento = "insert INTO parcheggio (nome , x,y,entrata) VALUES ('$n' , '$x' , '$y' , 1)";
    if(mysqli_query($connessione,$queryInserimento) or print mysqli_error($connessione))
    {
        $g = $g && true;
    }
}

if($g)
    echo "1";

?>