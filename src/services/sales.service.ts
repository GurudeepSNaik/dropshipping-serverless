// import { Client } from 'pg';

import { DB_CONFIG_MAP } from '../config/db.config';

interface SalesOrderInput {
  retailer: string;
  seller: string;
  items: { sku: string; quantity: number }[];
  customerId?: string;
  notes?: string;
  [key: string]: any;
}

interface SalesOrderResponse {
  orderId: string;
  createdAt: string;
  status: 'pending' | 'confirmed';
  retailer: string;
  seller: string;
  items: { sku: string; quantity: number }[];
  [key: string]: any;
}

export const createSalesOrder = async (data: SalesOrderInput): Promise<SalesOrderResponse> => {
  const { retailer, seller } = data;

  // const dbKey = retailer;
  // const dbConfig = DB_CONFIG_MAP[dbKey];

  // if (!dbConfig) {
  //   throw new Error(`No database configuration found for retailer-seller pair: ${dbKey}`);
  // }

  // const client = new Client({
  //   host: dbConfig.host,
  //   port: 5432,
  //   user: dbConfig.user,
  //   password: dbConfig.password,
  //   database: dbConfig.database,
  // });

  try {
    // await client.connect();

    // // Call your xTuple function (adjust args as needed)
    // const result = await client.query('SELECT * FROM createSalesOrder($1, $2, $3, $4)', [
    //   retailer,
    //   seller,
    //   JSON.stringify(data.items),
    //   data.customerId || null,
    // ]);

    // const orderId = result.rows[0]?.orderid || 'UNKNOWN';

    return {
      orderId:"SO123456",
      createdAt: new Date().toISOString(),
      status: 'pending',
      ...data,
    };
  } catch (error) {
    throw new Error(`Failed to create sales order: ${(error as Error).message}`);
  } finally {
    // await client.end();
  }
};
