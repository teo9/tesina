<?php 

class Nodo
{
    public function __construct($nome , $x , $y)
    {
        $this->nome = $nome;
        $this->x = $x;
        $this->y = $y;
        $this->potencial = INF ;
        $this->father = null;
    }

    public function SetPotencial($p)
    {
        $this->potencial = $p;
    }

    public function GetPotencial()
    {
        return $this->potencial;
    }

    function SetFather($nodo)
    {
        $this->father = $nodo;
    }

    public function GetNome()
    {
        return $this->nome;
    }

    public function GetFather()
    {
        return $this->father;
    }

    public function Equals($nodo)
    {
        if($this->nome == $nodo->GetNome())
            return true;
        else
            return false;
    }

}


?>