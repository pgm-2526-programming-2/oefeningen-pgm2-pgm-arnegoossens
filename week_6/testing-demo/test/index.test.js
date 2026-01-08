const test = require("node:test");
const assert = require("node:assert/strict");
const {sayHello, sum} = require("../index.js")

test("Testing if function sayHello returns Hello", () => {
  assert.equal(sayHello(), "Hello!");
});

test("Testing if sum function returns correct value", () => {
  assert.equal(sum(3, 2), 5);
})