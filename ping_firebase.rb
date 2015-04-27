require 'firebase'
base_uri = 'https://torid-fire-7950.firebaseio.com/'

time = Time.now

firebase = Firebase::Client.new(base_uri)
response = firebase.push("ping", {  pong:"scratch", time: time})
