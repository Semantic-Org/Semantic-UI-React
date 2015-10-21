const host = 'localhost';
const port = '8080';
const protocol = 'http';

module.exports = {
  host,
  port,
  protocol,
  serverUrl: protocol + '://' + host + ':' + port
};
