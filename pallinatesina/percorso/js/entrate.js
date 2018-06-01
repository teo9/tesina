
function drawEntrate(entrate)
{ 
    for(var i =0; i < entrate.length ; i++)
    {
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.strokeStyle = "red"
        var x = entrate[i].x *25 + 150;
        var y = entrate[i].y *25 + 100;
        ctx.arc( x, y, 10 , 0, 2 * Math.PI );
        ctx.fill();
        ctx.stroke();
        
        all.push({"tipo":"e" , "x":x,"y":y});
    }
}


function drawParcheggi(parcheggi)
{
    for(var i =0; i < parcheggi.length ; i++)
    {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black"
        var x = parcheggi[i].x *25 + 150;
        var y = parcheggi[i].y *25 + 100;
        ctx.rect( x, y, 50,50 );
        ctx.fill();
        ctx.stroke();
    }

    DrawPunti();
}

function FindNextNear(p)
{
    var xx = SameX(p,parcheggi);
    var yy = SameY(p,parcheggi);


    if(xx.length == 0 && yy.length == 0)
        return p;
    else
    {
        if(xx.length == 0)
        {
            var k = p;
            var i =0;
            while( i <= yy.length -1 ) // 
            {
                if(yy[i].x == k.x +2)
                {
                    k = yy[i];
                    parcheggi = array_remove(k , parcheggi);
                    i--;
                }
            i++;
            }
            return k;
        }
        else
        {
            var k = p;
            var i =0;
            while( i <= xx.length-1 )
            {
                if(xx[i].y == k.y +2)
                {
                    k = xx[i];
                    parcheggi = array_remove(k , parcheggi);
                    i--;
                }
                i++;
            }
            return k;
        }
    }

}

function SameX(p , array)
{
    var a = [];
    for(var i = 0; i < array.length;i++)
    {
        if(array[i].x == p.x)
            a.push(array[i]);
    }
    return Ordina(a);
}

function SameY(p , array)
{
    var a = [];
    for(var i = 0; i < array.length;i++)
    {
        if(array[i].y == p.y)
            a.push(array[i]);
    }
    return Ordina(a);
}

function Ordina(a)
{
    for(var k =0; k < a.length;k++)
        for( var i =0; i < (a.length -1) ; i++)
        {
            if(! (a[i].x < a[i+1].x || a[i].y < a[i+1].y)  )
            {
                var j = a[i];
                a[i] = a[i+1];
                a[i+1] = j;
            }
        }
    
    return a;
}

function DrawPunti()
{
   while( parcheggi.length > 0)
   {
        var pA = parcheggi[0];
        parcheggi.splice(0,1);
        var pB = FindNextNear(pA);

        var x ,y;
        ctx.beginPath();
        ctx.fillStyle = "blue";
        x = pA.x * 25 + 150;
        y = pA.y * 25 + 100;
        ctx.arc( x + 25,y,10,0,2 * Math.PI );
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "blue";
        x = pB.x * 25 + 150;
        y = pB.y * 25 + 100;
        ctx.arc( x+25,y+50,10,0,2 * Math.PI );
        ctx.fill();

        all.push({"tipo":"p" , "x":(pA.x * 25 + 175),"y":(pA.y * 25 + 100)});
        all.push({"tipo":"p" , "x":(pB.x * 25 + 175),"y":(pB.y * 25 + 150)});

      
   }
   console.log(all);
}


function array_remove(value , array)
{
    for(var i = 0 ; i < array.length;i++)
    {
        if(array[i].id == value.id)
        {    
            array.splice(i , 1);
        }
    }
    return array;
}