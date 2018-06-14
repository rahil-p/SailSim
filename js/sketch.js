let boat,
    wind,
    wave0,
    wave1,
    wave2,
    wave3,
    wave4,
    wave5,
    dest,
    font;

function preload() {
  font = loadFont('fonts/Muli-SemiBold.ttf');
}

function setup() {

  createCanvas(1000, 1000);
  frameRate(60);

  textFont(font);
  textSize(11);

  boat = new Boat();
  wind = new Wind();

  wave0 = new Wave(color(18, 52, 86, 50), 2, 20);
  wave1 = new Wave(color(18, 52, 86, 50), -2, 20);
  wave2 = new Wave(color(256, 50), 1, 18);
  wave3 = new Wave(color(256, 50), -1, 18);
  wave4 = new Wave(color(256, 75), 3, 21);
  wave5 = new Wave(color(256, 75), -3, 21);

  dest = new Destination();

}

function draw() {

  background(201, 211, 226);

  if (mouseIsPressed) {
    boat.rotateBoat();
  }

  boat.update(wind.windVelocity, wind.windAngle);
  wind.update();
  dest.update(boat.x, boat.y, boat.boatWidth, boat.boatLength, boat.boatAngle);

  wave0.show(boat.x, boat.y, boat.boatWidth, boat.boatVelocity);
  wave1.show(boat.x, boat.y, boat.boatWidth, boat.boatVelocity);
  wave2.show(boat.x, boat.y, boat.boatWidth, boat.boatVelocity);
  wave3.show(boat.x, boat.y, boat.boatWidth, boat.boatVelocity);
  wave4.show(boat.x, boat.y, boat.boatWidth, boat.boatVelocity);
  wave5.show(boat.x, boat.y, boat.boatWidth, boat.boatVelocity);
  boat.show();
  wind.show(boat.appVelocity, boat.appAngle);
  dest.show();

}

function placeRound(measure, nDigits = 2) {
  let rounded = round(measure * pow(10, nDigits)) / pow(10, nDigits);
  return rounded;
}

function angleMod(someAngle, makePos=1) {
  someAngle %= (TWO_PI);
  if (makePos==1) {
    while (someAngle < 0) {
      someAngle += TWO_PI;
    }
  }
  return someAngle;
}
