CAS Proxy
============

Hosts any web server behind CAS Authentication with NodeJS.

Installation
=====

```
# git clone https://github.com/fakechris/cas-proxy
# cd cas-proxy/
# npm -g install

// Then edit config.js, make sure you have everything checked in the config file
// and run!
# node app.js
```

Configuration
=============

All settings are placed in /config.js, hack it as you go.

### Global Settings

- ``enable_cas_auth``: *Enable or not?*
- ``cas_server_url``: *Point to the CAS server URL*
- ``cookie_secret``: *The secret token for cookies. replace it with a random string for security*
- ``replaceHostname``: *Enable replace Host in header use proxy url host*
- ``rejectUnauthorized``: *Enable use unsigned ssl cas server*

### Per proxy settings

- ``proxy_url``: *The url proxy to*
- ``listen_port``:  *The listen port of kibana3*
- ``enable_ssl_port``: *Enable SSL or not?*
- ``listen_port_ssl``: *If enable_ssl_port set to true, this is the port of SSL*
- ``ssl_key_file``: *Point to the ssl key file*
- ``ssl_cert_file``: *Point to the ssl certification file*

License
=======
CAS Proxy is freely distributable under the terms of the MIT license.

Copyright (c) 2014 Chris Song

See LICENCE for details.
