var premuto = null;

function MouseClick(e)
{
    var c = isInside(e);
    console.log(c);     
}

function controllaPremuto()
{
    
}

function isInside(pos){
    for( var i = 0 ; i < all.length; i++)
    {
        var rect = all[i];
            if(pos.x > rect.x && pos.x < rect.x+20 && pos.y < rect.y+20 && pos.y > rect.y)
            {
                ctx.lineWidth = "1";
                ctx.beginPath();
                ctx.fillStyle = "yellow";
                ctx.strokeStyle='purple';
                ctx.arc(rect.x ,rect.y,10,0,2*Math.PI);
                ctx.fill();
                ctx.stroke();
                return rect;
            }
    }
    return undefined;
}