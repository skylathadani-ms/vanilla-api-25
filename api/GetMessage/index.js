module.exports = async function (context, req) {
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { text: "Hello from the API" },
    headers: {
            "Content-Length": Buffer.byteLength(responseMessage, 'utf8')
        }
  };
};
