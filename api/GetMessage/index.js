module.exports = async function (context, req) {
  const responseMessage = {"Hello, this is your response! 10/23/24 10:17pm"};
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage,
        headers: {
            "Content-Length": Buffer.byteLength(responseMessage, 'utf8')
        }
    };
};
