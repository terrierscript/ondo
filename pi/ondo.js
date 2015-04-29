var Firebase = require('firebase')
var Degrees = new Firebase("https://torid-fire-7950.firebaseio.com/degree_log");
var ondo = require("../lib/ondo")

ondo(function(err, c){
  var time = new Date()
  Degrees.push({
    degree: c,
    error: err,
    time: time
  })
})