var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var pos = 120;
var size = 100;
var padding = 5;
 

for(var i = 0; i < 30; i++){
    context.beginPath();
    context.moveTo(pos, pos);
    context.lineTo(pos + size, pos);
    context.lineTo(pos + (size / 2) , pos - size);
    context.lineTo(pos, pos);
    context.strokeStlye = 'grey';
    context.stroke();
    pos += padding;
}