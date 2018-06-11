<?php
   require "./Grafi/grafo.php";
   require "./Grafi/elements/arco.php";
   require "./Grafi/elements/nodo.php";
   require "config.php";
   $g = new Grafo();

     //estraggo tutti i nodi
     $q = mysqli_query($connessione , "select * from parcheggio");
     while($e = mysqli_fetch_array($q))
     {
         $n = new Nodo($e['nome'] , $e['x'] , $e['y']);
         $g->AddNodo($n);
     }
     
     //estraggo tutti gli archi
     $q = mysqli_query($connessione , "select * from collegamento");
     while($e = mysqli_fetch_array($q))
     {
         $a = new Arco($g->GetNodo($e['Parcheggio_a']) , $g->GetNodo($e['Parcheggio_b']) , $e['distanza']);
         $g->AddArco($a);
     }
?>