<?php
session_start();

if(isset($_SESSION['log']))
{
    $connessione = mysqli_connect("localhost","root", "", "gestionale") or print(mysqli_error($connessione) );
}
else
{
    die("[]");
}
?>