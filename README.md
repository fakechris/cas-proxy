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

### Proxy Settings

- ``proxy_url``: *The url proxy to*
- ``replaceHostname``: *Enable replace Host in header use proxy url host*
- ``rejectUnauthorized``: *Enable use unsigned ssl cas server*

### Client settings

- ``listen_port``:  *The listen port of kibana3*
- ``brower_cache_maxage``:  *The browser cache max-Age controll, for a better loading speed*
- ``enable_ssl_port``: *Enable SSL or not?*
- ``listen_port_ssl``: *If enable_ssl_port set to true, this is the port of SSL*
- ``ssl_key_file``: *Point to the ssl key file*
- ``ssl_cert_file``: *Point to the ssl certification file*
- ``cookie_secret``: *The secret token for cookies. replace it with a random string for security*

### Client authentication settings

***1. Basic Authentication***

- ``enable_basic_auth``: *Enable or not?*
- ``basic_auth_users``:  *A list of user/passwd, see the comments in config.js for help. leave empty if you won't use it*

***2. CAS Auth***

- ``enable_cas_auth``: *Enable or not?*
- ``cas_server_url``: *Point to the CAS server URL*

License
=======
CAS Proxy is freely distributable under the terms of the MIT license.

Copyright (c) 2014 Chris Song

See LICENCE for details.
