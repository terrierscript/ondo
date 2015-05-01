var five = require("johnny-five")
var board = new five.Board({
  repl: false
})

module.exports = function(cb){
  console.log("start")
  board.once("ready", function() {
    console.log("ready")
    
    // This requires OneWire support using the ConfigurableFirmata
    var temperature = new five.Temperature({
      controller: "LM35",
      pin: "A0"
    })

    temperature.once("data", function(err, data){
      console.log("tmp")
      
      if(err){
        console.warn(err)
      }
      cb(err, data.celsius)
    })
  })
}
