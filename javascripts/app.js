var Degrees = new Firebase("https://torid-fire-7950.firebaseio.com/degree_log");
Degrees.on("value", function(d){
  app.loading = false
  d.forEach(function(log){
    app.logs.push(log.val())
  })
})

var app = new Vue({
  el : "#console",
  data : {
    loading: true,
    logs:[]
  }
})


