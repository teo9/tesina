function MouseClick(e) {
    var c = isInside(e);
    linea(e,all);
    console.log(all);
}
var contamelo = 1;
var tieni = {"nome":"","x": 0,"y" : 0, "idblocco": 0};
var passati = [];
var fai = true;
var parti=0;
function linea(posi, punti) {
        var fai = true;
        for (var i = 0; i < punti.length; i++) {
            if (posi.x > punti[i].x && posi.x < punti[i].x + 20 && posi.y < punti[i].y + 20 && posi.y > punti[i].y) {
                if(contamelo%2!=0)
                {
                    tieni.x=punti[i].x;
                    tieni.y=punti[i].y;  
                    tieni.idblocco = punti[i].idblocco;
                    tieni.nome = punti[i].nome;
                    contamelo++;                
                }
                else
                {  
                    if(tieni.idblocco != punti[i].idblocco)
                    {
                        if(passati.length==0)
                        {
                            if(tieni.x!=punti[i].x || tieni.y!=punti[i].y)   
                            {
                                ctx.beginPath();
                                ctx.lineWidth = "1";
                                ctx.moveTo(tieni.x,tieni.y);
                                ctx.lineTo(punti[i].x,punti[i].y);
                                ctx.fill();
                                ctx.stroke();
                                punto=false;

                                ctx.lineWidth = "1";
                                ctx.beginPath();
                                ctx.fillStyle = "blue";
                                ctx.strokeStyle = 'purple';
                                ctx.arc(tieni.x, tieni.y, 10, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.stroke();

                                ctx.lineWidth = "1";
                                ctx.beginPath();
                                ctx.fillStyle = "blue";
                                ctx.strokeStyle = 'purple';
                                ctx.arc(punti[i].x, punti[i].y, 10, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.stroke();
                                passati.push(tieni);
                                passati.push(punti[i]); 
                                contamelo=1;                              
                                salva(parti);
                                parti+=2;
                            }
                        }
                        else 
                        {
                            for(var j=0;j<passati.length-1;j+=2)
                            {                       
                                if((tieni.x==passati[j].x && tieni.y== passati[j].y && punti[i].x == passati[j+1].x && punti[i].y == passati[j+1].y) || (tieni.x==punti[i].x && tieni.y==punti[i].y))
                                {
                                    fai=false;
                                }
                            }
                            if(fai==true)
                            {                        
                                ctx.beginPath();
                                ctx.lineWidth = "1";
                                ctx.moveTo(tieni.x,tieni.y);
                                ctx.lineTo(punti[i].x,punti[i].y);
                                ctx.fill();
                                ctx.stroke();
                                punto=false;

                                ctx.lineWidth = "1";
                                ctx.beginPath();
                                ctx.fillStyle = "blue";
                                ctx.strokeStyle = 'purple';
                                ctx.arc(tieni.x, tieni.y, 10, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.stroke();

                                ctx.lineWidth = "1";
                                ctx.beginPath();
                                ctx.fillStyle = "blue";
                                ctx.strokeStyle = 'purple';
                                ctx.arc(punti[i].x, punti[i].y, 10, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.stroke();
                                passati.push(tieni);
                                passati.push(punti[i]); 
                                contamelo=1;                                
                                salva(parti);
                                parti+=2;
                            }
                            else
                            {
                                ctx.lineWidth = "1";
                                ctx.beginPath();
                                ctx.fillStyle = "blue";
                                ctx.strokeStyle = 'purple';
                                ctx.arc(tieni.x, tieni.y, 10, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.stroke();

                                ctx.lineWidth = "1";
                                ctx.beginPath();
                                ctx.fillStyle = "blue";
                                ctx.strokeStyle = 'purple';
                                ctx.arc(punti[i].x, punti[i].y, 10, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.stroke();
                                contamelo=1;
                            }
                        }
                    }                   
                    else
                    {
                                console.log("NO NO");
                                ctx.lineWidth = "1";
                                ctx.beginPath();
                                ctx.fillStyle = "blue";
                                ctx.strokeStyle = 'purple';
                                ctx.arc(tieni.x, tieni.y, 10, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.stroke();

                                ctx.lineWidth = "1";
                                ctx.beginPath();
                                ctx.fillStyle = "blue";
                                ctx.strokeStyle = 'purple';
                                ctx.arc(punti[i].x, punti[i].y, 10, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.stroke();
                                contamelo=1;
                    }                   
                }
            }
        }
        
}
function isInside(pos) {
    for (var i = 0; i < all.length; i++) {
        var rect = all[i];
        if (pos.x > rect.x && pos.x < rect.x + 20 && pos.y < rect.y + 20 && pos.y > rect.y) {
            ctx.lineWidth = "1";
            ctx.beginPath();
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = 'purple';
            ctx.arc(rect.x, rect.y, 10, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            return rect;
        }
    }
    return undefined;
}