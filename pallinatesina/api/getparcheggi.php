<?php
$a = array(   );
$b = array("id" => 1 , "x" => 2 , "y" => 2);
$c = array("id" => 2 , "x" => 4 , "y" => 2);
$d = array("id" => 3 , "x" => 6 , "y" => 2);
$e = array("id" => 4 , "x" => 2 , "y" => 4);
$f = array("id" => 5 , "x" => 2 , "y" => 8);

array_push($a,$b);
array_push($a,$c);
array_push($a,$d);
array_push($a,$e);
array_push($a,$f);

echo json_encode($a);
?>