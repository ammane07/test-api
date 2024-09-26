exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    try {
      //console.log('event is : ', event)
      //console.log('event body is : ', event.body)
      // Parse the incoming JSON payload from the request body
      const requestBody = JSON.parse(event.body);
      console.log('requestBody is : ', requestBody)
      
      let variableX = requestBody;
      return {
        headers: {
            "content-type": "application/json",
          },
      statusCode: 200,
 
      body: JSON.stringify({"Data message is ":variableX}),
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
