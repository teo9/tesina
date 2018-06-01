<?php
$a = array(   );
$b = array("id" => 1 , "x" => 0 , "y" => 2);

array_push($a , $b);

echo json_encode($a);
?>