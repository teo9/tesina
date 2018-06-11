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
        

        var entry = '[';
        
        for(var j=0;j<entrata.length;j++)
        {
            var x = Math.ceil((entrata[j].x-offset.x)/25);
            var y = Math.ceil((entrata[j].y-offset.y)/25);
            if(j!=0)
                entry += ',';
            entry+= "{\"x\":\""+x+"\",\"y\":\""+y+"\"}";
                   
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
                        window.location = "../index.php";
                }
            };
        sxhttp.send("entrate=" + entry); 
    }
}