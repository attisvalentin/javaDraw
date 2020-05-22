var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var size = 45;
var padding = 20;

for(i = 1; i < 10; i++){
    if(i < 10){
        context.fillStyle = 'rgba(255,165,0,.5)';
        context.fillRect(padding,padding,size,size);
        padding += size / 2;

    } 
}