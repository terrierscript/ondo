var SPI = require("pi-spi")

var spi = SPI.initialize("/dev/spidev0.0")
var buffer = new Buffer([0x68, 0])
spi.write(buffer, function(){
  console.log(arguments)
})