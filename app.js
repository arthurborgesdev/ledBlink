console.log("Hello World!");

var Gpio = require('pigpio').Gpio,
  led = new Gpio(47, {mode: Gpio.OUTPUT}),
  dutyCycle = 0;

setInterval(function () {
  led.pwmWrite(dutyCycle);

  dutyCycle += 5;
  if (dutyCycle > 255) {
    dutyCycle = 0;
  }
}, 20);
