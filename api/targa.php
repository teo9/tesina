<?php 

if(isset($_GET['m']) && $_GET['m'] != "" )
{
    $targa = $_GET['m'];
    //creo il grafo
    require "getGrafo.php"; //$g (Grafo)   
    $result = array();

    $c = mysqli_connect("127.0.0.1","root","","gestionale");
    $q = mysqli_query($c , "select nome from parcheggio where entrata = 1");
    while($r = mysqli_fetch_array($q))
    {
        $e = $r['nome'];
        $p = $g->Bellman($e);
        $result = array_merge($result , $p);
    }

    usort( $result , "ordina" );

    $i=0;
    $del = mysqli_query($c , "select * from macchina");
    while($pre = mysqli_fetch_array($del))
    {
        if(Array_contains($result , $pre['Parcheggio_nome']))
        {
            $g->Array_Remove( $result , $g->GetNodo($pre['Parcheggio_nome']) );
        }
    }
    $parcheggio = $result[0]->GetNome();

    //SAlvo il Parcheggio con la targa
    mysqli_query($c , "insert into macchina(targa,Parcheggio_nome) VALUES('$targa','$parcheggio' )") or print(mysqli_error($c));
    echo $parcheggio;

}

function Array_contains($array , $nome)
{
    foreach($array as $item)
    {
        if($item->getNome() == $nome)
            return true;
    }
    return false;
}

?>