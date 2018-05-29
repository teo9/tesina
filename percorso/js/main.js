//VARIABILI GLOBALI
var parcheggi = [];
//FUNZIONI
function body_load()
{
    //caricare i parcheggi

    self.addEventListener( "messaggio" , function(e)
        {
            console.log(e.data);
        } );

        var http =new XMLHttpRequest();
        http.onreadystatechange = function()
        {
            if(this.readyState == 4 && this.status == 200 )
            {
                self.postMessage(  JSON.parse(http.responseText));
            }
        };
        http.open("GET","../api/getparcheggi.php",true);
        http.send();
        http.open("GET","../api/getentrata.php",true);
        http.send();
}


