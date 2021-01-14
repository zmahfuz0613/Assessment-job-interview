"use strict";

const handlePromise = require("request-promise");
var request = require("request");

// To handle async api calls
function requestAsync(url, method, headers, data) {
  data = data || null;
  return handlePromise({
    headers: headers,
    method: method,
    url: url,
    body: data,
    json: true,
    resolveWithFullResponse: true,
  });
}

//regular api calls
function requestQuery(url, method, headers, callback) {
  let options = {
    url: url,
    method: method,
    headers: headers,
    strictSSL: false,
  };
  return request(options, function (err, response) {
    callback(err, response);
  });
}

module.exports = {
  requestQuery,
  requestAsync,
};
