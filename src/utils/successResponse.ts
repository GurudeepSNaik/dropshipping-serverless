import { logger } from './logger';
import { APIGatewayProxyResult } from 'aws-lambda';

export const successResponse = async (
  message: string,
  result: any,
  functionName: string,
  job: string
): Promise<APIGatewayProxyResult> => {
  // Log the success response with relevant details
  await logger({
    message: message,
    function: functionName,
    job: job,
    level: 'info', // You can adjust the log level as needed
    log: 'Success Response', // You can modify this or add more custom fields
    result, // Add the result or any other relevant details to log
  });

  // Return the success response
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
      result,
    }),
  };
};
