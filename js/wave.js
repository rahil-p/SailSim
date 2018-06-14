function Wave(color, displacement, lengthFactor) {

  let x = [],
      y = [],
      segNum = 20;

  for (var i = 0; i < segNum; i++) {
    x[i] = 0;
    y[i] = 0;
  }

  this.show = function(boatX, boatY, boatWidth, boatVelocity) {

    segLength = boatVelocity * lengthFactor;

    function dragSegment(i, xin, yin) {
      let dx = xin - x[i];
      let dy = yin - y[i];
      let angle = atan2(dy, dx);

      x[i] = xin - cos(angle) * segLength;
      y[i] = yin - sin(angle) * segLength;

      function segment(x, y, a) {

        push();
        translate(x, y);
        rotate(a);
        stroke(color)
        line(0, 0, segLength, 0);
        pop();

      }

      segment(x[i], y[i], angle);
    }

    dragSegment(0, boatX + displacement, boatY + displacement);
    for (var i = 0; i< x.length - 1; i++) {
      dragSegment(i+1, x[i], y[i]);
    }

  }
}
