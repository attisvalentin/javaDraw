var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;
var pos = 0;
var hue = 360


for(var i = 0; i < 17; i++){
    context.fillStyle = 'hsl(' + hue + ',60%,45%)';
    context.fillRect(pos,pos,width,height);
    pos += 10;
    width -= 20;
    height -= 20;
    hue -= 360/17;
}