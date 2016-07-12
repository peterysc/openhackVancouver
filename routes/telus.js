var express = require('express');
var request = require('https');
var router = express.Router();

var options = {
  "method": "GET",
  "hostname": "api.eu.apiconnect.ibmcloud.com",
  "port": null,
  "path": "/chlauusibmcom-tmf-hack/sb/location/getLocation?location=REPLACE_THIS_VALUE&accuracy=REPLACE_THIS_VALUE",
  "headers": {
    "content-type": "application/json",
    "accept": "application/json"
  }
};

router.get('/index', function (req, res) {
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

    req.end();
});

module.exports = router;