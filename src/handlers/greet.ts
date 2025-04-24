import { APIGatewayProxyHandler } from 'aws-lambda';
import { MESSAGES } from '../constants/messages';
import { successResponse } from '../utils/successResponse';
import { formatErrorResponse } from '../utils/errorResponse';

export const handler: APIGatewayProxyHandler = async (event) => {
  const functionName = 'greet';
  const job = 'greet.service';

  try {
    return successResponse(MESSAGES.SUCCESS, 'Welcome', functionName, job);
  } catch (error: any) {
    return formatErrorResponse({
      statusCode: 500,
      message: MESSAGES.ERROR,
      details: error?.message ?? 'Unexpected error',
      event,
      functionName,
      job,
      level: 'error',
    });
  }
};
