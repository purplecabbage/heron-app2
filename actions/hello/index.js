async function main(params = {}) {
  const name = params.name || "World";
  const requestOrigin = params.__ow_headers?.origin;
  const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
  const responseOrigin =
    requestOrigin && allowedOrigins.includes(requestOrigin) ? requestOrigin : "null";

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": responseOrigin
    },
    body: {
      ok: true,
      message: `Hello, ${name}!`,
      action: "hello"
    }
  };
}

module.exports = { main };
