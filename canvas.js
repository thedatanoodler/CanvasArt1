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
var mouse = {
  x:undefined,
  y: undefined
}
var maxRadiusLimit = 40;

window.addEventListener('mousemove', 
  function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
})

window.addEventListener('resize',
  function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
)

//Circle() is a Javascript Object
var random_color1 = 'rgb('
+ Math.floor(Math.random() * 256) + ',' 
+ Math.floor(Math.random() * 256) + ',' 
+ Math.floor(Math.random() * 256) + ')';

var random_color2 = 'rgb('
+ Math.floor(Math.random() * 256) + ',' 
+ Math.floor(Math.random() * 256) + ',' 
+ Math.floor(Math.random() * 256) + ')';

//to change the Color of the circles
var colorArray = [
    '#c5c7b6',
    '#99b24f',
    '#6d992a',
    '#7ea4a9',
    '#51553d',
    '#FF1B1C',
    '#FF7F11',
    '#ACBFA4'
];

function Circle(x, y, dx, dy, radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.minRadiusLimit = radius;

  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
        c.beginPath();        
        c.strokeStyle = random_color1;
        c.fillStyle = this.color;
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

      //interactivity
      if (mouse.x - this.x < 50 && mouse.x - this.x  > -50){
            if(this.radius < maxRadiusLimit ) {
                  this.radius += 1;
            }
      }else if (this.radius > this.minRadiusLimit ){
            this.radius -= 1;
          }
      if (mouse.y - this.y < 50 && mouse.y - this.y  > -50){
        if(this.radius < maxRadiusLimit ) {
            this.radius += 1;
        }
      } else if (this.radius > this.minRadiusLimit ){
              this.radius -= 1;
          }
      
      this.draw();
      }
}
var circleArray = [];

for (var i = 0 ; i < 500 ; i++){
      var radius = Math.random() * 5 + 1;
      var x = Math.random() * (innerWidth - 2 * radius) + radius;
      var y = Math.random() * (innerHeight - 2 * radius) + radius;
      var dx = (Math.random() - 0.5) * 4 ;
      var dy = (Math.random() - 0.5)  * 4 ;
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

console.log(canvas);
