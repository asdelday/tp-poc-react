'use strict';

require('babel-core/register')({});

const server = require('./src/server').default;
const PORT = process.env.PORT || 8081;

server.listen(PORT, () => {
  console.log('Server listening on', PORT);
});
