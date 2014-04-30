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
var cas_auth = require('./lib/cas-auth.js');

console.log('Server starting...');

run();

function run() {
  for (i in config.proxy_settings) {
    var subconfig = config.proxy_settings[i];
    run_one(config, subconfig);
  }
}

function run_one(config, subconfig) {
  var app = express();
  app.use(express.cookieParser());
  app.use(express.session({ secret: config.cookie_secret }));

  // Authentication
  cas_auth.configureCas(app, config);

  var proxy = httpProxy.createProxyServer({
    target: subconfig.proxy_url
  });

  var proxied_hostname = url.parse(subconfig.proxy_url).hostname;
  app.use(function(req, res, next) {
    // modify req host header
    if (config.replaceHostname) {
      req['headers'].host = proxied_hostname;
    }
    req['headers'].http_x_forwarded_for = req.connection.remoteAddress;
    proxy.web(req, res, { target: subconfig.proxy_url }, function(e){
      console.log('error '+ e);
    });
  });
  if (subconfig.enable_ssl_port === true) {
    var options = {
      key: fs.readFileSync(subconfig.ssl_key_file),
      cert: fs.readFileSync(subconfig.ssl_cert_file),
    };
    https.createServer(options, app).listen(subconfig.listen_port_ssl);
    console.log('Server listening on ' + subconfig.listen_port_ssl + '(SSL)');
  }
  http.createServer(app).listen(subconfig.listen_port);
  console.log('Server listening on ' + subconfig.listen_port + ' -> ' + subconfig.proxy_url);
}
