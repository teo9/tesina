<?php
$a = array(   );
$b = array("id" => 1 , "x" => 2 , "y" => 2);

array_push($a , $b);

echo json_encode($a);
?>