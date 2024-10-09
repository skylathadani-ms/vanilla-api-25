module.exports = async function (context, req) {
  const responseMessage = "Hello, this is your response!";
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage,
        headers: {
            "Content-Length": Buffer.byteLength(responseMessage, 'utf8')
        }
    };
};
