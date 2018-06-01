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
        var data = "[";
        for(var i=0;i<parcheggi.length;i++)
        {    
            contaaa++;       
            data += "{\"nome\":\"parcheggio"+String(contaaa)+"\" , \"x\":\""+parcheggi[i].x+"\" , \"y\":\""+parcheggi[i].y+"\"}";        
        }
        data = data + "]";
        xhttp.open("POST", "./api/salvaparcheggi.php", true);	
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("dati=" + data + "&w="+50+"&h=" + 50);
    
        console.log(data);

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