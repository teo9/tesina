var width ;
var height;
var larghezzacella = 25;


function crea()
{
	$("#oscura").removeClass("fade");
}

function crea_ok()
{
	width = $("#w").val();
	height = $("#h").val();
	size = { width:width , height:height};
	console.log(size);
	if(size.height != undefined && size.width != undefined)
	{
		$("#oscura").addClass("fade");
		var c = document.getElementById("canvas");
		ctx = c.getContext("2d");
		ctx.scale(1,1);
		ctx.clearRect(0,0,w.width(),w.height());
		ctx.lineWidth = "2";
		ctx.beginPath();
		ctx.rect(offset.x,offset.y,size.width , size.height);		
		ctx.stroke();
		
        griglia( { "x":150 , "y":100});
        creato = true;
	}
}

function griglia(punto)
{
	var c = document.getElementById("canvas");
		ctx = c.getContext("2d");
		ctx.scale(1,1);
		ctx.lineWidth = "1";
		ctx.strokeStyle = "gray";
	//x
	var x = punto.x;
	var y = punto.y + larghezzacella;

	while(y <= parseInt(size.height) + 100)
	{
		ctx.beginPath();
		ctx.moveTo( x , y );
		var px = parseInt(size.width) + 150;
		ctx.lineTo(px  , y );
		ctx.stroke();
		y += larghezzacella;
	}
	y = punto.y;
	//y
	while(x <= parseInt(size.width) + 150)
	{
		ctx.beginPath();
		ctx.moveTo( x , y );
		var py = parseInt(size.height) + 100;
		ctx.lineTo(x  , py );
		ctx.stroke();
		x += larghezzacella;
	}
}


function cancella()
{
	if(confirm("sei sicuro di voler cancellare?"))
	{
		var c = document.getElementById("canvas");
		ctx = c.getContext("2d");
		ctx.scale(1,1);
		ctx.beginPath();
		ctx.clearRect(0,0,w.width(),w.height());
		ctx.stroke();
		parcheggi = [];
		entrata = [];
		creato = false;
	}

}
