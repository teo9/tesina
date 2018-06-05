<?php
$a = array(   );

$q = mysqli_query($connessione , "select * from entrata");
while( $r = mysqli_fetch_array($q))
{
    array_push($a ,  $r  );
}

echo json_encode($a);
?>