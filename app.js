console.log("Hello World!");

var Gpio = require('pigpio').Gpio;
var led = new Gpio(47, { mode: Gpio.OUTPUT });
var toggle = true;

setInterval(function () {
  toggle = !toggle;
  led.digitalWrite(toggle);
}, 1000);
