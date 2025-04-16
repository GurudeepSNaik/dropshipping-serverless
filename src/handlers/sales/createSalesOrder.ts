import { MESSAGES } from '../../constants/messages';
import { createSalesOrder } from '../../services/sales.service';
import { logger } from '../../utils/logger';
import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    const result = await createSalesOrder(event);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: MESSAGES.SALES_ORDER_CREATED,
        result,
      }),
    };
  } catch (error: any) {
    logger.error('Error creating sales order', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: MESSAGES.ERROR,
        error: error?.message ?? error,
      }),
    };
  }
};
