'use strict';
const express = require('express');
const assets = require('../assets.json');

const app = express();
const cssFileName = assets && assets.app && assets.app.css || '';
const clientJsFileName = assets && assets.app && assets.app.js || '';
const vendorJsFileName = assets && assets.vendor && assets.vendor.js || '';

app.use('/public', express.static('build'));
app.use((req, res) => {
  const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Heroes POC</title>
        <link rel="stylesheet" type="text/css" href="/public/${cssFileName}">
      </head>
      <body>
        <div id="react-view"></div>
        <script src="/public/${vendorJsFileName}"></script>
        <script src="/public/${clientJsFileName}"></script>
      </body>
    </html>
  `;

  res.end(HTML);
});

export default app;
