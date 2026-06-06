async function main(params = {}) {
  const name = params.name || "World";

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: {
      ok: true,
      message: `Hello, ${name}!`,
      action: "hello"
    }
  };
}

module.exports = { main };
