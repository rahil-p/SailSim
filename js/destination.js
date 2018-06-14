function Destination() {

  let limit = 200;

  this.x = random(limit, width - limit);
  this.y = random(limit, .5 * height);

  this.radius = 40;
  this.time = 0;
  this.timePenalty = 0;
  this.cumScore = 0;
  this.cumDests = 0;

  this.show = function() {

    text('Destination Timer:  ' + this.time, 820, 944);
    text('Penalty Timer:  ' + this.timePenalty, 820, 960);
    text('Destination Score:  ' + this.cumScore, 820, 976)

    push();
    textSize(54);
    textAlign(RIGHT);
    fill(color(64,75));
    text(this.cumDests, 800, 976);
    pop();

    push();
    if (this.time % 120 <= 60) {
      stroke(138, 14, 14, 90);
    } else {
      stroke(138, 14, 14, 50);
    }
    fill(0, 0, 0, 0);
    ellipse(this.x, this.y, 2 * this.radius, 2 * this.radius);
    pop();

  }

  this.update = function(boatX, boatY, boatWidth, boatLength, boatAngle) {

    boatAngle = HALF_PI - boatAngle;

    let midSternDist = dist(this.x, this.y, boatX, boatY);
    let midBowDist = dist(this.x, this.y, boatX + boatLength * cos(boatAngle), boatY - boatLength * sin(boatAngle));

    if (midSternDist < this.radius && midBowDist < this.radius) {

      let x = this.x;
      let y = this.y;

      while (dist(this.x, this.y, x, y) < this.radius*4) {

        x = random(limit, width - limit);
        y = random(limit, height - limit);

      }

      this.x = x;
      this.y = y;
      this.cumScore += this.time + 2 * this.timePenalty;
      this.time = 0;
      this.timePenalty = 0;
      this.cumDests ++;

    }

    if ((boatX < .05 * height || boatX > .95 * height || boatY < .05 * height || boatY > .95 * height)) {
      this.timePenalty ++;
    }

    this.time ++;

  }
}
