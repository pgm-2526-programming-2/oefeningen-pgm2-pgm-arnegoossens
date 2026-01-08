const test = require("node:test");
const assert = require("node:assert/strict");
const { transformToDollar } = require("../utils/text");


test("A conversion from euro to a text prefixed with a dollar sign", () => {
  assert.equal(transformToDollar(5), "$5.85");
});