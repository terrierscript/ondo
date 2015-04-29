var Firebase = require('firebase')
var Degrees = new Firebase("https://torid-fire-7950.firebaseio.com/degree_log");
var ondo = require("../lib/ondo")

ondo(function(err, c){
  var time = new Date().toString()
  var data = {
    degree: c,
    error: err,
    time: time
  }
  console.log(data)
  Degrees.push(data, function(){
    process.exit(0)
  })
})