Stream = function (position, width) {
  this.position = position;
  this.symbols = [];
  this.numberOfSymbols = round(random(7, 20));
  this.speed = round(random(5, 10));

  this.generateSymbols = function () {
    var y = 0;
    for (var i = 0; i < this.numberOfSymbols; i++) {
      var symbol = new Symbol(createVector(this.position.x, y), this.speed);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y -= DEFEAULT_SYMBOL_SIZE;
    }
  }

  this.render = function () {
    this.symbols.forEach(function (symbol) {
      symbol.render();
    });
  }
}
