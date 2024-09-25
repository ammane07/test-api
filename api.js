exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    try {
      // Parse the incoming JSON payload from the request body
      //const requestBody = JSON.parse(event.body);

      // Save the data to a database or perform other necessary operations
      // ...

      const requestBody = event.body;

      console.log(requestBody);
      console.log(requestBody.mode);

      let variableX = requestBody.mode;


      return {
        headers: {
            "content-type": "application/json",
          },
      statusCode: 200,
 
      body: JSON.stringify({"New message":variableX}),
      };  

      // Return a success response
      //return {
      //  statusCode: 200,
      //  body: JSON.stringify({ message: 'POST request processed successfully'.concat(' ', requestBody) }),
      //};
    } catch (error) {
      // Return an error response if there was an issue processing the request
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Failed to process POST request' }),
      };
    }
  }
};
