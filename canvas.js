var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//c is context
var c = canvas.getContext('2d');

//Rectangles & Squares
// c.fillRect(100,100,100,100);
// c.fillStyle= 'rgba(0, 100, 0, 0.3)';
// c.fillRect(200,200,100,100);
// c.fillRect(300,400,40,100);

// for(var i =0; i<10; i++){
//    //Random location on canvas
//    var x = Math.random()*window.innerWidth;
//    var y = Math.random()*window.innerHeight;
//   //Random size
//   var width = Math.random()*250;
//   var height = Math.random()*250;
//  //Random colour
//   var random_color = 'rgb('+ Math.floor(Math.random() * 256) + ',' +
//   Math.floor(Math.random() * 256) + ',' +
//   Math.floor(Math.random() * 256) + ')';


// c.fillStyle= random_color;
// c.fillRect(x,y,width,height);
// }

//Line
// c.beginPath();
// c.moveTo(450,300);
// c.lineTo(300,100);
// c.lineTo(650,100);
// c.strokeStyle="red";
// c.stroke();

//Arc & Circles
// c.beginPath();
// c.strokeStyle='black';
// c.arc(500, 300, 100, 0, Math.PI*2, false);
// c.stroke();

// for(var i =0; i<25; i++){

//   //Random location on canvas
//   var x = Math.random()*window.innerWidth;
//   var y = Math.random()*window.innerHeight;

//   // Random radius between 0 and 50
//   var radius =  Math.random() * 100;

//   //Random colour
//   var random_color = 'rgb('+Math.floor(Math.random() * 256) + ',' +
//   Math.floor(Math.random() * 256) + ',' +
//   Math.floor(Math.random() * 256) + ')';

// c.beginPath();
// c.strokeStyle=random_color;
// c.arc(x, y, radius, 0, Math.PI*2, false);
// c.stroke();

// }

//Circle animate

// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5)*20 ;
// var dy = (Math.random() - 0.5)*20 ;
// var radius = 50;

//Circle() is a Javascript Object


var random_color1 = 'rgb('
+ Math.floor(Math.random() * 256) + ',' 
+ Math.floor(Math.random() * 256) + ',' 
+ Math.floor(Math.random() * 256) + ')';

var random_color2 = 'rgb('
+ Math.floor(Math.random() * 256) + ',' 
+ Math.floor(Math.random() * 256) + ',' 
+ Math.floor(Math.random() * 256) + ')';

//This function spawns a Circle element with x,y cordinates having dx,dy velocity vector
function Circle(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
        c.beginPath();
        c.strokeStyle = random_color1;
        c.fillStyle = random_color2;
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.stroke();
        c.fill();
  }

  this.update = function(){    
      //if statement ensures the x,y coords stay within screen
      if (this.x + this.radius > innerWidth || this.x- this.radius <0){
        this.dx = -this.dx;
      }
      if (this.y + this.radius > innerHeight || this.y - this.radius <0){
        this.dy = -this.dy;
      }
    //This increments the x coordinate everytime the page refreshes
      this.x += this.dx;
      this.y += this.dy;
      
      this.draw();
      }
}

var circleArray = [];

for (var i = 0 ; i < 200 ; i++){
      var radius = 35;
      var x = Math.random() * (innerWidth - 2 * radius) + radius;
      var y = Math.random() * (innerHeight - 2 * radius) + radius;
      var dx = (Math.random() - 0.5) * 5 ;
      var dy = (Math.random() - 0.5)  * 5 ;
      circleArray.push(new Circle(x, y, dx, dy, radius));
      
}
console.log(circleArray);

function animate(){

  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight); //refresh screen

  for (var i = 0 ; i < circleArray.length ; i++){
      circleArray[i].update();
  }
}
animate();

console.log('Screen width is: ',innerWidth);
console.log('Screen height is: ',innerHeight);
console.log('Canvas : ',canvas);
