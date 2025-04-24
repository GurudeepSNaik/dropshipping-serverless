import { MESSAGES } from '../../constants/messages';
import { STORES } from '../../constants/stores';
import { createSalesOrder } from '../../services/sales.service';
import { formatErrorResponse } from '../../utils/errorResponse';
import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  const functionName = 'createSalesOrder';
  const job = 'sales.service';

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { retailer, seller, ...rest } = body;
    if (!retailer || !STORES.includes(retailer)) {
      return formatErrorResponse({
        statusCode: 400,
        message: `Invalid or missing "retailer". Allowed values: ${STORES.join(', ')}`,
        event,
        functionName,
        job,
        level: 'warn',
      });
    }

    if (!seller || !STORES.includes(seller)) {
      return formatErrorResponse({
        statusCode: 400,
        message: `Invalid or missing "seller". Allowed values: ${STORES.join(', ')}`,
        event,
        functionName,
        job,
        level: 'warn',
      });
    }

    const result = await createSalesOrder({ retailer, seller, ...rest });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: MESSAGES.SALES_ORDER_CREATED,
        result,
      }),
    };
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
