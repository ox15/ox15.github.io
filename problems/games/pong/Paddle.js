function Paddle() {
  var h = 150;  // height
  var w = 10;   // width
  var f = 0;  // force
  var m = 15; // mass
  var a = 0;  // acceleration
  var v = 0;  // velocity
  var y = h/2;  // y position
  this.margin = w + 20; // margin from the right edge

  this.update = function() {
    // Update position
    f = mouseY - y;
    a = f / m;
    v = a;
    y = y + v;

    // Draw the paddle
    //fill(255);
    rect(screenW - this.margin, y-(h/2),w, h);
  }

  this.willHit = function(ball) {
    console.log([ball.x, y, ball.radius, h]);
    return ball.y > y-(h/2)-ball.radius && ball.y < y+(h/2)+ball.radius;
  }

  this.hit = function() {
    h = h - 10;
    h = constrain(h - 10, 10, 150);
  }

  this.reset=function() {
    h = 150;
  }

  this.velocity=function(){
    return v;
  }
}
