function salva()
{
    var xhttp = new XMLHttpRequest();
    var data = "[";
    for(var i=0;i<passati.length-1;i+=2)
    {    
            data = data + ',';   
            var distanzaaa = distanza(passati[i],passati[i+1]);    
            data += "{\"distanza\":\""+distanzaaa+"\" , \"Parcheggio_a\":\""+passati[i].nome+"\" , \"Parcheggio_b\":\""+passati[i+1].nome+"\"}";        
    }
    data = data + "]";
    xhttp.open("POST", "./api/salvacol.php", true);	
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("dati=" + data );
}
function distanza(a,b)
{
    return Math.sqrt(Math.pow(a.x-b.x,2)-Math.pow(a.y-b.y,2));
}