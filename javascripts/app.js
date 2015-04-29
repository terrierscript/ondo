/* global: Vue*/
(function(){
  Vue.directive("textcontent", {
    bind: function(){
      this.vm.$set(this.key, this.el.textContent)
    }
  })
  var baseUrl = "https://torid-fire-7950.firebaseio.com/degree_log"
  var Degrees = new Firebase(baseUrl);
  Degrees.limit(60).on("value", function(d){
    app.loading = false
    app.logs = []
    d.forEach(function(log){
      app.logs.unshift(log.val())
    })
  })

  var app = new Vue({
    el: "#main",
    data: {
      loading: true,
      logs: []
    },
    filters: {
      timeago: function(timeStr){
        try{
          // timeStr = timeStr.replace(/-/g, "/") // for opera
          var sec = ((new Date() - new Date(timeStr)) / 1000 )
          var min = sec / 60
        }catch(e){
          console.warn("warning time")
        }
        return Math.ceil(min) + " min ago"
      }
    }
  })
  var foo = new Vue({
    el: "#foo"
  })
  console.log(foo.baz)
  foo.$data.baz = "bee"
})()
