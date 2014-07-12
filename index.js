var SPI = require('pi-spi');

var spi = SPI.initialize("/dev/spidev0.0")
console.log(spi)
