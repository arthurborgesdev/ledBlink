console.log("Hello World!");

/*
var ledToggle;
var led = require("pi-pins").connect(47);

led.mode('out');
led.value(true);

setTimeout(function() {
  ledToggle = !ledToggle;
  led.value(ledToggle);
}, 1000);
*/

var Gpio = require('pigpio').Gpio,
  gpio,
  gpioNo;

for (gpioNo = Gpio.MIN_GPIO; gpioNo <= Gpio.MAX_GPIO; gpioNo += 1) {
  gpio = new Gpio(gpioNo);

  console.log('GPIO ' + gpioNo + ':' +
    ' mode=' + gpio.getMode() +
    ' level=' + gpio.digitalRead()
  );
}
