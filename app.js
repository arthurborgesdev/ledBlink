console.log("Hello World!");

var ledToggle;
var led = require("pi-pins").connect(47);

led.mode('out');
led.value(true);

setTimeout(function() {
  ledToggle = !ledToggle;
  led.value(ledToggle);
}, 1000)
