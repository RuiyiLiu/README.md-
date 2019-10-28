


var sound1
var bubbles = [];
var bubblespeed=4;
var bubbleX= bubblespeed;

function preload() {
  soundFormats('wav');
    sound1 = loadSound( 'do.wav');
    sound2 = loadSound( 're.wav');
    sound3 = loadSound( 'mi.wav');
    sound4 = loadSound( 'fa.wav');
    sound5 = loadSound( 'so.wav');
    sound6 = loadSound( 'la.wav');
  

}
function setup() {
    createCanvas(400, 400);

    for (var i = 0; i < 100; i++) {
        var bubble = {
            x: random(width),
            y: random(height),
            radius: random(50, 50)
        };
        bubbles.push(bubble);
    }
}
function draw() {
     background(249,243,236);
  fill(230,69,37);
  strokeWeight(4);
  stroke(14,42,85);
  
  

    for (var i = 0; i < bubbles.length; i++) {
        var bubble = bubbles[i];

        if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
            if (mouseIsPressed) {
                bubbles.splice(i, 1);
                sound1.play();// remove this bubble!
            }

            if (mouseIsPressed) {
                bubbles.splice(i, 2);
                sound2.play();// remove this bubble!
            }
        }
    }

  ellipse(bubble.x, bubble.y, bubble.radius*2);


      bubble.x += bubbleX;

     if (bubble.x>=400){
    bubbleX = -2;
  }
      if (bubble.x<10){
    bubbleX = 2;
      }

}