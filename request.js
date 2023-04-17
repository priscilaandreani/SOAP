const soap = require('soap');
const HttpProxyAgent = require('http-proxy-agent');

const url = 'http://www.dneonline.com/calculator.asmx?WSDL';
const args = { intA: 10, intB: 5 };
const proxy = 'http://localhost:8888';

const agent = new HttpProxyAgent(proxy);

const options = {
  request: {
    agent: agent
  },
  endpoint: url,
  forceSoap12Headers: true
}

soap.createClient(url, options, function(err, client) {
  if (err) throw err;

  client.Add(args, function(err, result) {
    if (err) throw err;
    console.log('Add result:', result.AddResult);

    client.Subtract(args, function(err, result) {
      if (err) throw err;
      console.log('Subtract result:', result.SubtractResult);

      client.Multiply(args, function(err, result) {
        if (err) throw err;
        console.log('Multiply result:', result.MultiplyResult);
      });
    });
  });
});
