var stompClient = null;

$(document).ready(function(){
  console.log("index page is ready");
  connect();
});

function connect(){
  stompClient = Stomp.client("wss://test.payworks.io/v1/cloudpos/websocket");
  stompClient.connect({
    "serialNumber" : Math.trunc(Math.random()*.1000000)
  }, function(frame){
    console.log("connected: " + frame);
  });
}
