var creato = false; //indica se ho già creato e disegnato il parcheggio


function isInside(pos){
    for( var i = 0 ; i < parcheggi.length; i++)
    {
        var rect = {"x" : parcheggi[i].x , "y" : parcheggi[i].y};
        var temp = {"x": rect.x ,"y": rect.y};
        rect.x = rect.x * 25 + offset.x;
        rect.y = rect.y * 25 + offset.y;

            if(pos.x > rect.x && pos.x < rect.x+50 && pos.y < rect.y+ 50 && pos.y > rect.y)
            {               
                return temp;
            }
    }
    return undefined;
}

function ArrayContains(array , obj)
{
    for(var i = 0 ; i < array.length ;i++)
    {
        if(array[i].x ==  obj.x && array[i].y == obj.y)
        {
            return true;
        }
        else if( array[i].x + 1 == obj.x || array[i].y +1 == obj.y)
        {
            return true;
        }
    }
    return false;
}

function ArrayRemove(array , obj)
{
    for(var i = 0 ; i < array.length ;i++)
    {
        if(array[i].x == obj.x && array[i].y == obj.y)
        {
            array.splice(i, 1);
            return null;
        }
    }
    return null;
}

var stato = 0; // 1:entrata  2:parcheggia  3:elimina parcheggio
var offset = {"x" : 150,"y" : 100};
var size;
var parcheggi = [];
var ctx; //oggetto per disegnare
var entrata = [];