var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

for(var i = 0; i <= width ;i++){
    if (i % 3 === 0){
        context.beginPath();
        context.moveTo(i, height / 2);
        if (i % 2 === 0){
            context.lineTo(width / 2, height - height);
        }
        else {
            context.lineTo(width / 2, height );
        }
        context.strokeStyle = 'rgba(255,0,0,.5)';
        context.stroke();
    }
}


