//VARIABILI GLOBALI
var parcheggi = [];
var entrate = [];
var ctx;
var all = [];

//FUNZIONI
function body_load()
{
        var http =new XMLHttpRequest();
        http.onreadystatechange = function()
        {
            if(this.readyState == 4 && this.status == 200 )
            {
                parcheggi = JSON.parse(http.responseText);
            }
        };

        http.open("GET","../api/getparcheggi.php",false);
        http.send();

        var xhttp =new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
            if(this.readyState == 4 && this.status == 200 )
            {
                entrate = JSON.parse(xhttp.responseText);
            }
        };
        xhttp.open("GET","../api/getentrata.php",false);
        xhttp.send();

        var c = document.getElementById("canvas");
		ctx = c.getContext("2d");
        ctx.scale(1,1);
        ctx.lineWidth = "2";

        console.log(entrate);
        console.log(parcheggi);

        drawEntrate(entrate);
        drawParcheggi(parcheggi);
}