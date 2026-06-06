const test = require("node:test");
const assert = require("node:assert/strict");
const { main } = require("./index");

test("main returns default greeting", async () => {
  const result = await main({});

  assert.equal(result.statusCode, 200);
  assert.equal(result.body.message, "Hello, World!");
  assert.equal(result.body.action, "hello");
});

test("main returns personalized greeting", async () => {
  const result = await main({ name: "Adobe" });

  assert.equal(result.statusCode, 200);
  assert.equal(result.body.message, "Hello, Adobe!");
});
