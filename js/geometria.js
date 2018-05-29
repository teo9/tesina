function orientamento(punto)
{
    // x = 150
    // y = 100
    // x = 150 + 
    //
    // d(f , p) = 
    var dx0 = punto.x - offset.x;
    var dx1 = (punto.x - (offset.x +  parseInt(size.width))) * -1;
    var dy0 = punto.y - offset.y;
    var dy1 = (punto.y - (offset.y + parseInt(size.height))) * -1;

    if(dx0 < dy0 && dx0 < dy1  )
    {
        return "va";
    }
    else if( dx1 < dy0 && dx1 < dy1)
    {
        return "vb";
    }
    else if(dy0 < dx0 && dy0 < dx1)
    {
        return "ob";
    }
    else
    {
        return "oa";
    }
}
