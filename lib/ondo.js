var five = require("johnny-five")
var board = new five.Board()

module.exports = function(cb){
  board.once("ready", function() {
    // This requires OneWire support using the ConfigurableFirmata
    var temperature = new five.Temperature({
      controller: "LM35",
      pin: "A0"
    })

    temperature.once("data", function(err, data){
      if(err){
        console.warn(err)
      }
      cb(err, data.celsius)
    })
  })
}
