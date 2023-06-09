/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()
exports.handler = async (event, context) => {
  
    let date = new Date()
    // retrieve user data from the event object
    if(event.request.userAttributes.sub) {

      let params = {
        Item: {
            'id': {S: event.request.userAttributes.sub},
            '__typename': {S: 'Users'},
            'email': {S: event.request.userAttributes.email},
            'name': {S: event.request.userAttributes.name},
            'phone': {S: event.request.userAttributes.phone_number},
            'createdAt': {S: date.toISOString()},
            'updatedAt': {S: date.toISOString()},
        },
        TableName: process.env.USERTABLE
    }

    try {
      await ddb.putItem(params).promise()
      console.log("Success")
  } catch (err) {
      console.log("Error", err)
  }

  console.log("Success: Everything executed correctly")
  context.done(null, event)


    } else {
      console.log("Error: Nothing was written to DynamoDB");
      context.done(null, event);
    }
};
