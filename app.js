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

console.log("Hello Botao!");

var toggle = true;
var value;
app.post('/botao/resultado', function(req, res) {
  led.digitalWrite(toggle);
  if (toggle == true) {
    value = "ACESO";
    toogle = true;
    break;
  } else {
    value = "APAGADO";
  }
  toggle = !toggle;
  res.send(value);
});

/*
setInterval(function () {
  toggle = !toggle;
  led.digitalWrite(toggle);
}, 1000);
*/
app.listen(80, () => console.log('Example app listening on port 80!'))
