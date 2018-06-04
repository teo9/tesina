function MouseClick(e) {
    var c = isInside(e);
    linea(e,all);
}
var contamelo = 0;
var tieni = {"x": 0,"y" : 0};
var passati = [];
function linea(posi, punti) {
        var fai = true;
        for (var i = 0; i < punti.length; i++) {
            if (posi.x > punti[i].x && posi.x < punti[i].x + 20 && posi.y < punti[i].y + 20 && posi.y > punti[i].y) {
                if(contamelo%2!=0)
                {
                    tieni.x=punti[i].x;
                    tieni.y=punti[i].y;  
                    passati.push(tieni);
                    contamelo++;                
                }
                else
                {       
                    for(var j=0;j<passati.length-1;j+=2)
                    {                       
                        if((tieni.x==passati[j].x && tieni.y== passati[j].y && punti[i].x == passati[j+1].x && punti[i].y == passati[j+1].y) || (tieni.x==punti[i].x && tieni.y==punti[i].y))
                        {
                            fai=false;
                            contamelo=1;
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
                        
                        passati.push(punti[i]); 
                        contamelo=1;
                    } 
                    else
                    {
                        console.log("NO NO");
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