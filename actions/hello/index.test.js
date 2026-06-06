const test = require("node:test");
const assert = require("node:assert/strict");
const { main } = require("./index");

function restoreAllowedOrigins(previousValue) {
  if (previousValue === undefined) {
    delete process.env.ALLOWED_ORIGINS;
    return;
  }

  process.env.ALLOWED_ORIGINS = previousValue;
}

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

test("main defaults CORS origin to null when no origin is allowed", async () => {
  const previous = process.env.ALLOWED_ORIGINS;
  delete process.env.ALLOWED_ORIGINS;

  try {
    const result = await main({ __ow_headers: { origin: "https://example.com" } });

    assert.equal(result.headers["Access-Control-Allow-Origin"], "null");
  } finally {
    restoreAllowedOrigins(previous);
  }
});

test("main allows configured CORS origin", async () => {
  const previous = process.env.ALLOWED_ORIGINS;
  process.env.ALLOWED_ORIGINS = "https://example.com";

  try {
    const result = await main({ __ow_headers: { origin: "https://example.com" } });

    assert.equal(result.headers["Access-Control-Allow-Origin"], "https://example.com");
  } finally {
    restoreAllowedOrigins(previous);
  }
});
