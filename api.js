exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    try {
      console.log('event is : ', event)
      console.log('context is : ', context)
      // Parse the incoming JSON payload from the request body
      const requestBody = JSON.parse(event.body);
      console.log('data is : ', requestBody.data)

      // Save the data to a database or perform other necessary operations
      // ...

     // const requestBody = event.body;

     // console.log(requestBody);
     // console.log(requestBody.mode);

      //let variableX = requestBody.mode;
      let variableX = requestBody.data;


      return {
        headers: {
            "content-type": "application/json",
          },
      statusCode: 200,
 
      body: JSON.stringify({"Data message is ":variableX}),
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
