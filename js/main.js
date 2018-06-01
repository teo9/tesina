var mouse = { x:0 , y:0};
all = [];

//var distanzaaa=0;

//Main 
function doveclicchi(e)
{
	mouse.x=e.offsetX;
	mouse.y=e.offsetY;	
	if(creato)
	{
		switch(stato)
		{
			case 0:
			break;

			case 1: 
			entra(mouse);
			break;

			case 2: 
			parcheggia(mouse);
			break;

			case 3: 
			elimina(mouse);
			break;
		}
	}
}


function elimina(mouse)
{
	var k = isInside(mouse);
	console.log(k);
	console.log(parcheggi);
	if(k != undefined)
		var c = confirm("vuoi eliminare il parcheggio?");
		if( c == true)
		{
			ctx.clearRect(0,0,w.width(),w.height());
			ArrayRemove(parcheggi , k);
			ctx.strokeStyle = "black";
			ctx.beginPath();
			ctx.rect(offset.x,offset.y,size.width , size.height);		
			ctx.stroke();
			griglia( { "x":150 , "y":100});

			for(var i = 0; i < entrata.length; i++)
			{
				ctx.lineWidth = "3";
				ctx.strokeStyle = "red";
				ctx.beginPath();
				switch(entrata[i].d)
				{
					case "oa" :
						ctx.moveTo(entrata[i].x , offset.y + parseInt(size.height));
						ctx.lineTo(entrata[i].x + 50 , offset.y + parseInt(size.height));
						break;
					case "ob" : 
						ctx.moveTo(entrata[i].x , offset.y);
						ctx.lineTo(entrata[i].x + 50 , offset.y);
						break;
					case "va" : 
						ctx.moveTo(offset.x , entrata[i].y);
						ctx.lineTo(offset.x  , entrata[i].y+ 50);
						break;
					case "vb" :
						ctx.moveTo(offset.x + parseInt(size.width), entrata[i].y);
						ctx.lineTo(offset.x + parseInt(size.width) , entrata[i].y+ 50);
						break;
				}
				ctx.stroke();
				ctx.lineWidth = "2";
				ctx.strokeStyle = "black";
			}

			for(var i = 0; i < parcheggi.length;i++)
			{
				var x = parcheggi[i].x;
				var y = parcheggi[i].y;
				ctx.beginPath();
				ctx.lineWidth = "2";
				ctx.strokeStyle = "black";
				ctx.fillStyle = "green";
				x = (x-1) * 25 + offset.x;
				y = (y -1)* 25 + offset.y;
				ctx.rect( x , y , 50, 50 );
				ctx.fill();
				ctx.stroke();
			}
		}
}

function entra(mouse)
{
	var o = orientamento(mouse);

	ctx.beginPath();
	ctx.strokeStyle = "red";
	ctx.lineWidth = "3";
	if( o[0] == "o")
	{
		//if(mouse.x+50 <= parseInt(size.width))

			if(o[1] == "a")
			{
				ctx.moveTo(mouse.x , offset.y + parseInt(size.height));
					if(mouse.x+50<offset.x+parseInt(size.width))
					{
					ctx.lineTo(mouse.x + 50 , offset.y + parseInt(size.height));
					entrata.push( { "x":mouse.x , "y": offset.y + parseInt(size.height) , "d" : "oa" });
					}
					else
					{
						console.log("esci dal parcheggio");
					}
			}
			else
			{

				ctx.moveTo(mouse.x , offset.y);
					if(mouse.x+50<offset.x+parseInt(size.width))
					{
					ctx.lineTo(mouse.x + 50 , offset.y);
					entrata.push({"x":mouse.x , "y": offset.y , "d" : "ob"});
					}
					else
					{
						console.log("esci dal parcheggio");
					}
					}

	}
	else
	{
		//if(mouse.y + 50 <= parseInt(size.height))
			if(o[1] == "a")
			{
				ctx.moveTo(offset.x , mouse.y);
					if(mouse.y+50<offset.y+parseInt(size.height))
					{
						ctx.lineTo(offset.x  , mouse.y+ 50);
						entrata.push( { "x" : offset.x , "y" : mouse.y , "d" : "vb"});
					}
					else
					{
						console.log("esci dal parcheggio");
					}			
			}
			else
			{
				ctx.moveTo(offset.x + parseInt(size.width), mouse.y);
					if(mouse.y+50<offset.y+parseInt(size.height))
					{
						ctx.lineTo(offset.x + parseInt(size.width) , mouse.y+ 50);
						entrata.push({ "x" : offset.x + parseInt(size.width), "y" : mouse.y , "d" : "va"});	
					}
					else
					{
						console.log("esci dal parcheggio");
					}	
			}
	}
	ctx.stroke();
	ctx.lineWidth = "2";
	ctx.strokeStyle = "black";
	console.log(entrata);
}
//controllato i parcheggi ora sono sono più buggati
function parcheggia(mouse)
{	
	var max = {"x": (Math.floor((parseInt(size.width) - offset.x)/25)*2) ,
			   "y": (Math.floor((parseInt(size.height) - offset.y)/25)*2) };	
			   console.log(max.x,max.y);
	var x = ( Math.ceil((mouse.x - offset.x) / 25));
	console.log(x);
	var y = ( Math.ceil((mouse.y - offset.y) / 25));
	console.log(y);
	
	if( x < max.x && y < max.y && x>0 && y>0)
		if(!ArrayContains(parcheggi , {"x":x,"y":y}))
		{
			parcheggi.push({ "x" : x , "y" : y });
			ctx.beginPath();
			ctx.lineWidth = "2";
			ctx.strokeStyle = "black";
			ctx.fillStyle = "green";
			x = (x-1)*25 + offset.x;
			y = (y-1)*25 + offset.y;
			ctx.rect( x , y , 50, 50 );
			ctx.fill();
			ctx.stroke();
		}
	console.log(parcheggi);
	
}