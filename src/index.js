const express = require('express');
const ipaddr = require('ipaddr.js');

let app = express();
const port = 8080;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());

app.post("/api", (req, res) => {
    if (req.ip) {
        res.status(200).send({
            "success": true,
            "error": "",
            "ip": convertToIPv4(req.ip)
        });
    } else {
        res.status(400).send({
            "success": false,
            "error": "Request did not contain IP Address",
            "ip": ""
        });
    }
});

function convertToIPv4(ipAddress) {
    try {
        // Try parsing the IP address using the ipaddr.js library
        const ip = ipaddr.parse(ipAddress);
        if (ip.isIPv4MappedAddress()) {
            // If it's an IPv4-mapped IPv6 address, return the corresponding IPv4 address
            return ip.toIPv4Address().toString();
        }
    } catch (error) {
        // If there's an error parsing the IP address, return the original IP address
        console.error('Error parsing IP address:', error);
    }
}

app.listen(port, () => {
    console.log("IPget is online!");
});