var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

/* felezők

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

context.beginPath();
context.moveTo(canvasWidth - canvasWidth, canvasHeight / 2);
context.lineTo(canvasWidth, canvasHeight / 2);
context.strokeStyle = 'red';
context.stroke();

context.beginPath();
context.moveTo(canvasWidth / 2, canvasHeight - canvasHeight);
context.lineTo(canvasWidth / 2, canvasHeight);
context.strokeStyle = 'green';
context.stroke();
felezők vége */

/* 3szög

var positionX = 150;
var positionY = 225;
var size = 150;

context.beginPath();
context.moveTo(positionX, positionY);
context.lineTo(positionX + size, positionY);
context.lineTo(positionX + size / 2, positionY - size);
context.lineTo(positionX, positionY);
context.strokeStlye = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = 'rgba(255,165,0,.5)';
context.fill();

háromszög vége */ 

//--- átlós feladat ---

//var posix = canvasWidth - canvasWidth;
//var posiy = canvasHeight - canvasHeight;

//context.strokeStyle = 'red';
//context.beginPath();
//context.moveTo(posix,posiy);
//context.lineTo(canvasWidth,canvasHeight);
//context.stroke();
//context.moveTo(posix,posiy + canvasHeight);
//context.lineTo(canvasWidth,posiy);
//context.stroke();

//--- átlós feladat vége ---

/* ---- ZÁSZLÓS FELADAT ----

var rectHeight = 50;
var rectWidth = 250;

var posX = (canvasWidth / 2) - (rectWidth / 2);
var posY = (canvasHeight / 2) - (rectHeight / 2) - rectHeight;

context.fillStyle = 'red';
context.fillRect(posX, posY, rectWidth, rectHeight);

posY = posY + rectHeight;

context.fillStyle = 'white';
context.fillRect(posX, posY, rectWidth, rectHeight)

posY = posY + rectHeight;

context.fillStyle = 'green';
context.fillRect(posX, posY, rectWidth, rectHeight)

 ---- ZÁSZLÓS FELADAT vége---- */

/* --- kocka --

context.fillStyle = 'orange';
context.fillRect(125,50,200,200);

 --- kocka vége --*/
