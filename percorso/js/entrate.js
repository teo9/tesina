var idblocco =0;


function drawEntrate(entrate)
{ 
    for(var i =0; i < entrate.length ; i++)
    {
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.strokeStyle = "red"
        var x = entrate[i].x *25 + 160;
        var y = entrate[i].y *25 + 100;
        ctx.arc( x, y, 10 , 0, 2 * Math.PI );
        ctx.fill();
        ctx.stroke();
        
        all.push({"nome" : entrate[i].nome ,"tipo":"e" , "x":x,"y":y});
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
    var prec = p;
    if(xx.length == 0 && yy.length == 0)
        return p;
    else
    {
           
            var k = p;
            var i =0;
            while( i <= yy.length -1 ) // 
            {
                if( parseInt(yy[i].x) == ( parseInt(k.x) +2) )
                {
                    k = yy[i];
                    parcheggi = array_remove(k , parcheggi);
                     //AGGIUNGO COLLEGAMENTI 
                    Collegamenti.push( { "da" : prec, "a" : k } );
                    prec = k;
                    //i--;
                }
				i++;
            }
			
            if(k != p)
				return k;
       
            var k = p;
            prec = p;
            var i =0;
            while( i <= xx.length-1 )
            {
                if( parseInt(xx[i].y) == parseInt(k.y) +2)
                {
                    k = xx[i];
                    parcheggi = array_remove(k , parcheggi);
                     //AGGIUNGO COLLEGAMENTI 
                    Collegamenti.push( { "da" : p, "a" : k } );
                    prec = k;
                    i--;
                }
                i++;
            }
            return k;
    }
}

function SameX(p , array)
{
    var a = [];
    for(var i = 0; i < array.length;i++)
    {
        if( parseInt(array[i].x) == parseInt(p.x))
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
            if(! (  parseInt(a[i].x) < parseInt(a[i+1].x) || parseInt(a[i].y) < parseInt(a[i+1].y))  )
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

        all.push({"tipo":"p" , "nome": pA.nome , "x":(pA.x * 25 + 175),"y":(pA.y * 25 + 100) , "idblocco" : idblocco});
        all.push({"tipo":"p" , "nome": pB.nome ,"x":(pB.x * 25 + 175),"y":(pB.y * 25 + 150), "idblocco" : idblocco }); 
        idblocco ++;     
   }
}


function array_remove(value , array)
{
    for(var i = 0 ; i < array.length;i++)
    {
        if(array[i].nome == value.nome)
        {    
            array.splice(i , 1);
        }
    }
    return array;
}