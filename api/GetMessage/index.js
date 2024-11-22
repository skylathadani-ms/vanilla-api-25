module.exports = async function (context, req) {
  const responseMessage = {
    message: "Hello, this is your response! 10/23/24 10:17pm"
  };
  context.res = {
      // status: 200, /* Defaults to 200 */
      body: JSON.stringify(responseMessage),
      headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(JSON.stringify(responseMessage), 'utf8')
      }
  };
};

