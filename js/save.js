function save()
{
    if(creato)
    { 
       var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function()
            {
                if(this.readyState == 4 && this.status == 200 )
                    console.log(xhttp.responseText);
            };
        
        for(var i=0;i<parcheggi.length;i++)
        {    
            contaaa++;       
            xhttp.open("GET", "./api/salvaparcheggi.php?nome=" +nome + contaaa +"&x="+parcheggi[i].x+"&y="+parcheggi[i].y, true);	
            xhttp.send();
            console.log("ho salvato");         
        }
        for(var j=0;j<entrata.length;j++)
        {
            var x = Math.ceil((entrata[j].x-offset.x)/25);
            var y = Math.ceil((entrata[j].y-offset.y)/25);
            xhttp.open("GET", "./api/salvaentrata.php?entratax="+x+"&entratay="+y,true);
            xhttp.send();
            console.log("ho inviato :D");       
        }
    }
}