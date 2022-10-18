var painter1 = document.getElementById("c1").getContext("2d");

var painter2 = document.getElementById("c2").getContext("2d");


function drawBackground(painter)
{
painter.fillStyle ="#000000";
painter.fillRect(0, 0 , 400, 400); 
}

drawBackground(painter1);
drawBackground(painter2);


painter1.fillStyle ="#FF0000";

for(var x = 0; x < 13; ++x)
{
for(var a = 0; a < 13; ++a){
    painter1.fillRect(10 + 30*a, 10 + 30*x, 20, 20);
}

}

var h = 0;
while(h < 13)
{
    painter2.fillStyle ="#FF0000";
    painter2.fillRect(10 + 30*h, 10 + 30*h, 20, 20);
    painter2.fillRect(370 - 30*h, 10 + 30*h, 20, 20);
    ++h;
}