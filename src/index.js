const express = require('express');

let app = express();
const port = 8080;

app.use(express.json());

app.post("/api", (req, res) => {
    if(req.ip) {
        res.status(200).send({
            "success": true,
            "error": "",
            "ip": req.ip
        });
    } else {
        res.status(400).send({
            "success": false,
            "error": "Request did not contain IP Address",
            "ip": ""
        });
    }
});

app.listen(port, () => {
    console.log("IPget is online!");
});