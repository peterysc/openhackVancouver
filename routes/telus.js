var express = require('express');
var http = require("https");
var router = express.Router();

var options = {
  "method": "POST",
  "hostname": "api.eu.apiconnect.ibmcloud.com",
  "port": null,
  "path": "/chlauusibmcom-tmf-hack/sb/sendSms/sendSms",
  "headers": {
    "content-type": "application/json",
    "accept": "application/json"
  }
};

router.get('/', function (req, res) {
    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
    });

    req.write(JSON.stringify({ message: 'Your order has arrived', address: 'tel:16042206285' }));
    req.end();
    res.send("200 OK");
});

module.exports = router;