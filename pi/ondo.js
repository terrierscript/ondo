var Raspi = require("raspi-io")
var five = require("johnny-five")
var board = new five.Board({
  io: new Raspi()
})

board.on("ready", function() {
  // This requires OneWire support using the ConfigurableFirmata
  var temperature = new five.Temperature({
    controller: "TMP36",
    pin: "A0"
  })

  temperature.on("data", function(err, data){
    if(err){
      console.log(err)
      return
    }
    console.log(data.celsius + "°C", data.fahrenheit + "°F")
    console.log("0x" + this.address.toString(16))
  })
})
