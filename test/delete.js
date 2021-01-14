const chai = require("chai");
const expect = chai.expect;
const config = require("../config");
const header = require("../utils/header");
const request = require("../utils/endpointServer");

describe("Delete Service API ", () => {
  let baseUrl = config.baseUrl;
  let url;
  let headers = header.plainHeader();

  it("verify the record has been deleted", (done) => { //done is being used as a parameter to test a callback.
    url = baseUrl + "/posts/1";

    // console.log("url is", url);
    //Since this is a DELETE request and doesn't require us make async call, requestQuery function is being used.

    request.requestQuery(url, "DELETE", headers, function (err, resp) {
      if (err) {
        done(); //done is used to test callback in 'it' function which will handle the error arguments.
      } else {
        console.log(
          "status code error for deleted data is ",
          resp.body,
          resp.statusCode
        );
        expect(resp.statusCode).to.equal(200);
        done();
      }
    });
  });
});
