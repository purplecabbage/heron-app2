async function main(params = {}) {
  const name = params.name || "World";
  const requestOrigin = params.__ow_headers?.origin;
  const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
  const headers = {
    "Content-Type": "application/json"
  };

  if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
    headers["Access-Control-Allow-Origin"] = requestOrigin;
  }

  return {
    statusCode: 200,
    headers,
    body: {
      ok: true,
      message: `Hello, ${name}!`,
      action: "hello"
    }
  };
}

module.exports = { main };
