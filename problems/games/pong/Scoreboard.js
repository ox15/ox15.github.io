function Scoreboard() {
  var score = 0;

  this.increment = function() {
    score++;
  }

  this.reset = function() {
    score=0;

  }

  this.update = function() {
     text("score: " + score, 10, 30);

  }
}
