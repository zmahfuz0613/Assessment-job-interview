const chai = require("chai");
const expect = chai.expect;
const should = chai.should();

const request = require("../utils/endpointServer");
const config = require("../config");
const header = require("../utils/header");
const fs = require("fs");
const path = require("path");

describe("POST Service API ", () => {
  let baseUrl = config.baseUrl;
  let url;
  let headers = header.plainHeader();

  it("verify the status code is 201 and should able to create record ", (done) => { //done is being used as a parameter to test a callback.
    url = baseUrl + "/posts";

    let data = {
      userId: 1,
      title: "foo",
      body: "bar",
    };

    request
      .requestAsync(url, "POST", headers, data)
      .then((response) => {
        expect(response.statusCode).to.equal(201);
        expect(response.body).to.be.an.instanceof(Object);
        response.body.should.have.keys("id", "title", "body", "userId");
      })
      .then(() => done(), done)
      .catch((error) => {
        done(error);
      });
  });
});
