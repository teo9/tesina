function save()
{
    if(creato)
    { 
        var contaaa=0;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
            {
                if(this.readyState == 4 && this.status == 200 )
                {
                    console.log( xhttp.responseText);
                }
            };
        var data = "[";
        for(var i=0;i<parcheggi.length;i++)
        {    
            if(i != 0)
                data = data + ',';       
            data += "{\"nome\":\"parcheggio"+String(contaaa)+"\" , \"x\":\""+parcheggi[i].x+"\" , \"y\":\""+parcheggi[i].y+"\"}";  
            contaaa++;      
        }
        data = data + "]";
        xhttp.open("POST", "./api/salvaparcheggi.php", true);	
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("dati=" + data );
        var faicosa=true;

        var entry = '[';
        for(var j=0;j<entrata.length;j++)
        {
            var x = Math.ceil((entrata[j].x-offset.x)/25);
            var y = Math.ceil((entrata[j].y-offset.y)/25);
            for(k=0;k<parcheggi.length;k++)
            {
                if((x>=parcheggi[k].x && x<=parcheggi[k].x+1 && y==parcheggi[k].y)|| (y>=parcheggi[k].y && y<=parcheggi[k].y+1 && x==parcheggi[k].x))
                {
                    faicosa=false;
                }
            }
            if(faicosa==true)
            {
           
            if(j!=0)
                entry += ',';
            entry+= "{\"x\":\""+x+"\",\"y\":\""+y+"\"}";
            }
            else
            {
                console.log("Entrata sopra parcheggio");
            }
                   
        }
        var sxhttp = new XMLHttpRequest();
        entry +=']';
        sxhttp.open("POST", "./api/salvaentrata.php",true);
        sxhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        sxhttp.onreadystatechange = function()
            {
                if(this.readyState == 4 && this.status == 200 )
                {
                    console.log(sxhttp.responseText);
                    if(sxhttp.responseText == "1")
                        window.location = "./percorso/index.html";
                }
            };
        sxhttp.send("entrate=" + entry); 
    }
}