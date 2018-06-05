<?php 

class Arco
{
    function __construct($nodoa , $nodob , $durata)
    {
        $this->nodoa = $nodoa;
        $this->nodob = $nodob;
        $this->durata = $durata;
    }

    public function GetPeso()
    {
        return $this->durata;
    }

    
}

?>