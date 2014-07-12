var Degrees = new Firebase("https://torid-fire-7950.firebaseio.com/degree_log");
Degrees.limit(60).on("value", function(d){
  app.loading = false
  d.forEach(function(log){
    app.logs.unshift(log.val())
  })
})

var app = new Vue({
  el : "#console",
  data : {
    loading: true,
    logs:[]
  },
  filters : {
    timeago : function(timeStr){
      var sec = ((new Date() - new Date(timeStr))/1000)
      var min = sec/60
      return Math.ceil(min) + " min ago"
    }
  }
})


