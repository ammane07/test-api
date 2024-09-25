exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    try {
      // Parse the incoming JSON payload from the request body
      const requestBody = JSON.parse(event.body);

      // Save the data to a database or perform other necessary operations
      // ...

      // Return a success response
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'POST request processed successfully'.concat(' ', requestBody) }),
      };
    } catch (error) {
      // Return an error response if there was an issue processing the request
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Failed to process POST request' }),
      };
    }
  }
};
