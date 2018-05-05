var gameStart = false;
var score;
var b = new Ball();
var p = new Paddle();
var s = new Scoreboard();
var input;
var data = new Array();
var screenW = 500;
var screenH = 500;

function setup() {
  createCanvas(screenW, screenH);
  noStroke();
  smooth();
  ellipseMode(CENTER);
  noCursor();
  fill(255);
  textSize(32);
  reset();
  frameRate(20);
}

function draw() {
  background(0);
  p.update();
  s.update();

  if (gameStart) {
    b.update();

    // if ball hits the right side...
    if (b.x + b.radius > screenW - p.margin) {

      if (p.willHit(b)) {
        // if ball hits movable bar, invert X direction
        p.hit();
        b.hit(p);
        s.increment();
      } else {
        // if it didn't hit the bar, game over.  Reset parameters.
        reset();
      }
    }
  }
}

function mousePressed() {
  gameStart = !gameStart;
}

function reset(){
  gameStart = false;
  score=0;
  s.reset();
  b.reset();
  p.reset();
}
