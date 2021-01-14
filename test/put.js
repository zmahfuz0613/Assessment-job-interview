const chai = require("chai");
const expect = chai.expect;
const request = require("../utils/endpointServer");
const config = require("../config");
const header = require("../utils/header");

describe("PUT Service API ", () => {
  let baseUrl = config.baseUrl;
  let url;
  let headers = header.plainHeader();

  it("post has been updated and status code verified 200 ", (done) => {
    //done is being used as a parameter to test a callback.
    url = baseUrl + "/posts/1";
    let data = {
      id: 1,
      userId: 1,
      title: "updated title",
      body: "updated body",
    };

    request
      .requestAsync(url, "PUT", headers, data)
      .then((response) => {
        expect(response.statusCode).to.equal(200);
        expect(response.body.id).to.equal(1);
        expect(JSON.stringify(response.body)).to.equal(JSON.stringify(data)); //flattening the object into a string
        // console.log(JSON.stringify(data))
        // console.log(data)
      })
      .then(() => done(), done)
      .catch((error) => {
        done(error);
      });
  });
});
