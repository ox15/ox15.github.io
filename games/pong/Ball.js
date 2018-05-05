function Ball() {
    'use strict';
    this.x = 150;
    this.y = 150;
    var speedX = 4, speedY = 4, diam = 20;
    this.radius = diam / 2;

    this.update = function () {
        // Draw the ball
        ellipse(this.x, this.y, diam, diam);

        // Update the state
        this.x = this.x + speedX;
        this.y = this.y + speedY;

        // if ball hits up or down, change direction of Y
        if (this.y > screenH - this.radius || this.y < this.radius) {
            speedY = speedY * -1;
        }

        if (this.x > screenW - this.radius || this.x < this.radius) {
            speedX = speedX * -1;
        }
    }

    this.right = function () {
      speedX = abs(speedX);
    }

    this.hit = function (paddle) {
        speedX = speedX * -1.1;
        speedY = constrain(speedY + paddle.velocity()/5, -6, 6);
    }

    this.reset = function() {
      this.x = 150;
      this.y = 150;
      speedX = 4;
      speedY = 4;
    }
}
