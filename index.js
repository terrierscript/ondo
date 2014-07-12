/*var SPI = require('pi-spi');

var spi = SPI.initialize("/dev/spidev0.0")
console.log(spi)
*/
var Firebase = require("firebase")

var firebase = new Firebase('https://torid-fire-7950.firebaseio.com/degree_log')
firebase.limit(10).on("value", function(a){
  console.log(a.val())
})