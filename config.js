module.exports =  {

    // Enable? true or false
    "enable_cas_auth": true,
        // Point to the CAS authentication URL
        "cas_server_url": "https://server_name/cas",

    // Cookies secret
    "cookie_secret": "REPLACE_WITH_A_RANDOM_STRING_PLEASE",

    replaceHostname: true,

    // use unsigned ssl connection
    "rejectUnauthorized": false,

    proxy_settings : [
        {
        // proxied url
        proxy_url: "http://127.0.0.1:8023",

        replaceHostname: false,

        // Which port listen to
        "listen_port": 9500,
        // Enable SSL protocol
        "enable_ssl_port": false,
            // The following settings are valid only when enable_ssl_port is true
            "listen_port_ssl": 4443,
            // Use absolute path for the key file
            "ssl_key_file": "POINT_TO_YOUR_SSL_KEY",
            // Use absolute path for the certification file
            "ssl_cert_file": "POINT_TO_YOUR_SSL_CERT",
        },
        {
        proxy_url: "http://127.0.0.1:8024",
        "listen_port": 9501,
        "enable_ssl_port": false,
        }
    ],

};
