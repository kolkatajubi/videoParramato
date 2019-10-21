const request = require("request");

const options = {
  url:
    "http://qamatrixapi.policybazaar.com/partner/Partner.svc/CreateLeadUTMDetails",
  method: "GET",
  headers: {
    Accept: "application/json"
  }
};

request(options, function(err, res, body) {
  let json = JSON.parse(body);
  console.log(json);
});
