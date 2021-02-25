var wall, bullet;
var speed, weight, thickness;
function setup() {
  createCanvas(1000, 400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 15, 30);
  bullet.shapeColor = color("white");
  bullet.velocityX = speed;
  wall = createSprite(600, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0, 0, 0);
  bullet.collide(wall);
  var damage = Is_Touching();
  if(damage > 10) {
    bullet.shapeColor = color("red");
  } else {
    bullet.shapeColor = color("green");
  }
  drawSprites();
}

function Is_Touching() {
  if (bullet.x + bullet.width >= wall.x) {
      bullet.velocityX = 0;
      return ((weight*(speed^2))/(thickness^3));
  } else {
      return -1;
  }
}