const chai = require("chai");
const assert = chai.assert;
const config = require("../config");
const request = require("../utils/endpointServer");
const header = require("../utils/header");

describe("GET post api ", () => {
  let baseUrl = config.baseUrl;
  let url;
  let headers = header.plainHeader();

  it("verify the status code is 200", (done) => {
    url = baseUrl + "/posts";
    request
      .requestAsync(url, "GET", headers)
      .then((response) => {
        assert.equal(response.statusCode, 200);
      })
      .then(() => done(), done)
      .catch((error) => {
        done(error);
      });
  });

  it("verify the status code is 200", (done) => {
    url = baseUrl + "/posts";
    request
      .requestAsync(url, "GET", headers)
      .then((response) => {
        assert.equal(response.statusCode, 200);
        // console.log(response);
      })
      .then(() => done(), done)
      .catch((error) => {
        done(error);
      });
  }); 
});
