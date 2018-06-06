function salva(pos)
{
    var xhttp = new XMLHttpRequest();
    var data = "[";
    
            data = data + ',';   
            var distanzaaa = distanza(passati[pos],passati[pos+1]);    
            data += "{\"distanza\":\""+distanzaaa+"\" , \"Parcheggio_a\":\""+passati[pos].nome+"\" , \"Parcheggio_b\":\""+passati[pos+1].nome+"\"}";        
    
    data = data + "]";
    xhttp.open("POST", "./api/salvacol.php", true);	
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("dati=" + data );
}

function distanza(a,b)
{
    return Math.sqrt(Math.pow(a.x-b.x,2)-Math.pow(a.y-b.y,2));
}