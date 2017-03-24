var streams = [];
var DEFEAULT_SYMBOL_SIZE = 50;

function setup () {
  createCanvas(window.innerWidth, window.innerHeight);

  /**
   * Number of of streams to have on screen.
   */
  var numberOfStreams = round(width / DEFEAULT_SYMBOL_SIZE);

  /**
   * The x coordinate of a stream.
   */
  var x = 0;

  for (var i = 0; i < numberOfStreams; i++) {
    var stream = new Stream(createVector(x, random(-1000, 0)));
    stream.generateSymbols();
    streams.push(stream);
    x += DEFEAULT_SYMBOL_SIZE;
  }

  textSize(DEFEAULT_SYMBOL_SIZE);
}

function draw () {
  /**
   * Let's set the background to black.
   */
  background(0);
  streams.forEach(function (stream) {
    stream.render();
  });
}
