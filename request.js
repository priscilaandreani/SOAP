const express = require('express');
const soap = require('soap');

const app = express();

const url = 'http://www.dneonline.com/calculator.asmx?wsdl';

app.get('/', function (req, res) {
  res.send('Bem-vindo ao consumidor de Web Service SOAP com Express!');
});

app.get('/add/:intA/:intB', function (req, res) {
  const args = {
    intA: parseInt(req.params.intA),
    intB: parseInt(req.params.intB),
  };

  soap.createClient(url, function (err, client) {
    if (err) throw err;

    client.Add(args, function (err, result) {
      if (err) throw err;

      res.send(`Resultado: ${result.AddResult}`);
    });
  });
});

app.get('/subtract/:intA/:intB', function (req, res) {
  const args = {
    intA: parseInt(req.params.intA),
    intB: parseInt(req.params.intB),
  };

  soap.createClient(url, function (err, client) {
    if (err) throw err;

    client.Subtract(args, function (err, result) {
      if (err) throw err;

      res.send(`Resultado: ${result.SubtractResult}`);
    });
  });
});

app.get('/multiply/:intA/:intB', function (req, res) {
  const args = {
    intA: parseInt(req.params.intA),
    intB: parseInt(req.params.intB),
  };

  soap.createClient(url, function (err, client) {
    if (err) throw err;

    client.Multiply(args, function (err, result) {
      if (err) throw err;

      res.send(`Resultado: ${result.MultiplyResult}`);
    });
  });
});

app.listen(3000, function () {
  console.log('Aplicação rodando na porta 3000!');
});
