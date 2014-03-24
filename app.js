/**
 * Hosts the web server behind CASv2 Authentication or Google OAuth2 Authentication
 * with nodejs and express.
 * License: MIT
 * Author: Chris Song.
 * Project: https://github.com/fakechris/cas-proxy
 */

var express = require('express');
var https = require('https');
var http = require('http');
var url = require('url');
var httpProxy = require('http-proxy');

var config = require('./config');
var app = express();

console.log('Server starting...');

app.use(express.cookieParser());
app.use(express.session({ secret: config.cookie_secret }));

// Authentication
require('./lib/cas-auth.js').configureCas(express, app, config);

var proxy = httpProxy.createProxyServer({
  target: config.proxy_url
});

config.hostname = url.parse(config.proxy_url).hostname;
app.use(function(req, res, next) {
  // modify req host header
  req['headers'].host = config.hostname;
  req['headers'].http_x_forwarded_for = req.connection.remoteAddress;
  proxy.web(req, res, { target: config.proxy_url }, function(e){
    console.log('error '+ e);
  });
});


run();

function run() {
  if (config.enable_ssl_port === true) {
    var options = {
      key: fs.readFileSync(config.ssl_key_file),
      cert: fs.readFileSync(config.ssl_cert_file),
    };
    https.createServer(options, app).listen(config.listen_port_ssl);
    console.log('Server listening on ' + config.listen_port_ssl + '(SSL)');
  }
  http.createServer(app).listen(config.listen_port);
  console.log('Server listening on ' + config.listen_port);
}
