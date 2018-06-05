<?php
   require "./Grafi/grafo.php";
   require "./Grafi/elements/arco.php";
   require "./Grafi/elements/nodo.php";

   $g = new Grafo();

     //estraggo tutti i nodi
     $q = mysqli_query($con , "select idEntrata as nome,x,y from entrata UNION select nome,x,y from parcheggio");
     while($e = mysqli_fetch_array($q))
     {
         $n = new Nodo($e['nome'] , $e['x'] , $e['y']);
         $g->AddNodo($n);
     }
     
     //estraggo tutti gli archi
     $q = mysqli_query($con , "select * from collegamento");
     while($e = mysqli_fetch_array($q))
     {
         $a = new Arco($g->GetNodo($e['Parcheggio_a']) , $g->GetNodo($e['Parcheggio_b']) , $e['distanza']);
         $g->AddArco($a);
     }
?>