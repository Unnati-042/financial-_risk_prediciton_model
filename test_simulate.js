const http = require('http');

const data = JSON.stringify({
  portfolioValue: 1000000,
  volatility: 0.15,
  expectedReturn: 0.08,
  days: 252,
  confidenceLevel: 0.95
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/risk/simulate',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => console.log(body));
});

req.write(data);
req.end();
