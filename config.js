module.exports =  {
    // proxied url
    proxy_url: "http://127.0.0.1:80",

    // use unsigned ssl connection
    "rejectUnauthorized": false,

    ////////////////////////////////////
    // Proxy server configurations
    ////////////////////////////////////
    // Which port listen to
    "listen_port": 8081,
    // Control HTTP max-Age header. Whether the browser cache static kibana files or not?
    // 0 for no-cache, unit in millisecond, default to 0
    // We strongly recommand you set to a larger number such as 2592000000(a month) to get a better loading speed
    "brower_cache_maxage": 0,
    // Enable SSL protocol
    "enable_ssl_port": false,
        // The following settings are valid only when enable_ssl_port is true
        "listen_port_ssl": 4443,
        // Use absolute path for the key file
        "ssl_key_file": "POINT_TO_YOUR_SSL_KEY",
        // Use absolute path for the certification file
        "ssl_cert_file": "POINT_TO_YOUR_SSL_CERT",

    ////////////////////////////////////
    // Security Configurations
    ////////////////////////////////////
    // Cookies secret
    // Please change the following secret randomly for security.
    "cookie_secret": "REPLACE_WITH_A_RANDOM_STRING_PLEASE",

    // =================================
    // Basic Authentication Settings
    // The following config is different from the previous basic auth settings.
    // It will be applied on the client who access kibana3.
    // Enable? true or false
    "enable_basic_auth": false,
        // Multiple user/passwd supported
        // The User&Passwd list for basic auth
        "basic_auth_users": [
            {"user": "demo1", "password": "pwd1"},
            {"user": "demo1", "password": "pwd2"},
        ],


    // =================================
    // CAS SSO Login
    // Enable? true or false
    "enable_cas_auth": true,
        // Point to the CAS authentication URL
        "cas_server_url": "https://point-to-the-cas-server/cas",

};
