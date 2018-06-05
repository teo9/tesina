<?php 

    class Grafo
    {
       public function __construct()
        {
            $this->Nodi = Array();
            $this->Archi = Array();
        }

        public function GetNodi()
        {
            return $this->Nodi;
        }

        public function GetArchi()
        {
            return $this->Archi;
        }

        public function AddArco($arco)
        {
            array_push($this->Archi , $arco );
        }

        public function GetNodo($name)
        {
            foreach($this->Nodi as $n)
            {
                if($n->nome == $name)
                    return $n;
            }
        }

        public function AddNodo($nodo)
        {
            array_push($this->Nodi , $nodo);
        }

        public function DjKstra($da , $a)
        {
            return $this->dijkstra($da,$a);
        }

        public function dijkstra($da , $a)
        {
            
            $da->SetPotencial(0);
            $nodi = $this->Nodi;
            $archi = $this->Archi;
            
            $this->Array_Remove($nodi , $da);

            while(count($nodi) != 0 )
            {
                for($i = 0; $i < count($archi) ; $i++)
                {
                    if( $archi[$i]->nodoa->GetNome() == $da->GetNome() )
                    {
                        if($archi[$i]->nodob->GetPotencial() > $da->GetPotencial() + $archi[$i]->GetPeso())
                            {
                                $archi[$i]->nodob->SetPotencial( $da->GetPotencial() + $archi[$i]->GetPeso());
                                $archi[$i]->nodob->SetFather($da);
                            }   
                    }
                }
                    usort( $nodi , "ordina" );
                    $da = &$nodi[0]; 
                    
                    $this->Array_Remove($nodi , $da );
                
               if($da->Equals($a))
               {
                   break;
               }
            }
            
            return $da;
            
        }

        public function GetPercorso($nodo)
        {
            if($nodo->GetFather() == null)
                return $nodo->nome;
            else
                return  $nodo->nome ."-". $this->GetPercorso($nodo->GetFather());
        }

        public function Array_Remove(&$arr , $val)
        {
            if($val != null)
                for($i=0;$i < count($arr) ; $i++)
                {
                    if( $arr[$i]->GetNome() == $val->GetNome() )
                    {
                        array_splice($arr , $i , 1);
                        break;
                    }
                }
        }
    }



    function ordina($a,$b)
        {
            if($a->potencial == $b->potencial)
                return 0;
            if($a->potencial < $b->potencial)
                return -1;
            else return 1;
        }

?>