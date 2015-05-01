var Firebase = require('firebase')
var Degrees = new Firebase("https://torid-fire-7950.firebaseio.com/degree_log");
var ondo = require("./lib/ondo")

ondo(function(err, c){
  console.log("Callback")
  var time = new Date().toString()
  var data = {
    degree: c,
    error: err,
    time: time
  }
  console.log(data)
  Degrees.push(data, function(err){
    console.log(err)
    process.exit(0)
  })
})
