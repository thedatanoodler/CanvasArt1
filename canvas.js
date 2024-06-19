var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//c is context

var c = canvas.getContext('2d');

//Rectangles & Squares
c.fillRect(100,100,100,100);
c.fillStyle= 'rgba(0, 100, 0, 0.3)';
c.fillRect(200,200,100,100);
c.fillRect(300,400,40,100);

for(var i =0; i<10; i++){
   //Random location on canvas
   var x = Math.random()*window.innerWidth;
   var y = Math.random()*window.innerHeight;
  //Random size
  var width = Math.random()*250;
  var height = Math.random()*250;
 //Random colour
  var random_color = 'rgb('+ Math.floor(Math.random() * 256) + ',' +
  Math.floor(Math.random() * 256) + ',' +
  Math.floor(Math.random() * 256) + ')';


c.fillStyle= random_color;
c.fillRect(x,y,width,height);
}

//Line
c.beginPath();
c.moveTo(450,300);
c.lineTo(300,100);
c.lineTo(650,100);
c.strokeStyle="red";
c.stroke();

//Arc & Circles
c.beginPath();
c.strokeStyle='black';
c.arc(500, 300, 100, 0, Math.PI*2, false);
c.stroke();

for(var i =0; i<25; i++){

  //Random location on canvas
  var x = Math.random()*window.innerWidth;
  var y = Math.random()*window.innerHeight;

  // Random radius between 0 and 50
  var radius =  Math.random() * 100;

  //Random colour
  var random_color = 'rgb('+Math.floor(Math.random() * 256) + ',' +
  Math.floor(Math.random() * 256) + ',' +
  Math.floor(Math.random() * 256) + ')';

c.beginPath();
c.strokeStyle=random_color;
c.arc(x, y, radius, 0, Math.PI*2, false);
c.stroke();

}


console.log(canvas);
