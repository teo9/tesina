<?php
$a = array(   );
$con = mysqli_connect("localhost","root", "", "gestionale");

$q = mysqli_query($con , "select * from entrata");
while( $r = mysqli_fetch_array($q))
{
    array_push($a ,  json_encode($r)  );
}

echo json_encode($a);
?>