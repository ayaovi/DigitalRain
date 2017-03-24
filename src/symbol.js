Symbol = function (position, speed) {
  this.position = position;
  this.representation;
  this.speed = speed;
  this.switchInterval = round(random(40, 70));

  this.setToRandomSymbol = function () {
    this.representation = String.fromCharCode(0x30a0 + round(random(96)));
  }

  this.render = function () {
    fill(0, 255, 70);
    text(this.representation, this.position.x, this.position.y);
    this.fall();
    if (this.position.y % this.switchInterval == 0) {
      this.setToRandomSymbol();
    }
  }

  this.fall = function () {
    this.position.y = (this.position.y > height) ? 0 : this.position.y += this.speed;
  }
}
