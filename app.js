// server
const express = require('express');
const path = require('path');
const app = express();

// botao
var Gpio = require('pigpio').Gpio;
var led = new Gpio(47, { mode: Gpio.OUTPUT });

app.get('/botao', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
  console.log("Acessou a página do botão");
});

console.log("Hello World!");

var Gpio = require('pigpio').Gpio;
var led = new Gpio(47, { mode: Gpio.OUTPUT });
var toggle = true;

setInterval(function () {
  toggle = !toggle;
  led.digitalWrite(toggle);
}, 1000);

app.listen(80, () => console.log('Example app listening on port 80!'))
