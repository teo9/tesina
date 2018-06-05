<?php 

if(isset($_GET['m']) && $_GET['m'] != "" )
{
    //creo il grafo
    require "getGrafo.php"; //$g (Grafo)   
    $p = "";
    $c = mysqli_connect("127.0.0.1","root","","gestionale");
    mysqli_query($c , "select idEntrata from entrate");
    $r = mysqli_fetch_array($c);
    $e = $r['idEntrata'];
    $p = $g->Bellman($e);
    echo var_dump($p);
}

?>