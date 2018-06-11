function salva()
{
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200 )
        {
            window.location = "../index.php?stato=fine";
        }
    };

    var data = "[";

    for(var i =0 ;i < Collegamenti.length;i++)
    {
        if(i!=0)
            data = data + ',';
            var distanzaaa = distanza(Collegamenti[i].da , Collegamenti[i].a);
            console.log(distanzaaa);    
            data += "{\"distanza\":\""+distanzaaa+"\" , \"Parcheggio_a\":\""+Collegamenti[i].da.nome +"\" , \"Parcheggio_b\":\""+Collegamenti[i].a.nome+"\"}";        
    }
            
    data = data + "]";
    xhttp.open("POST", "./phppp/salvacol.php", true);	
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("dati=" + data );

}

function distanza(a,b)
{
    return Math.sqrt(Math.pow(b.x - a.x,2)+Math.pow(b.y-a.y,2));
}