// import { Client } from 'pg';

export const createSalesOrder = async (data: any) => {
  // Insert into DB or call NetSuite/Shopify API here
  // const client = new Client({
  //   host: process.env.PG_HOST,
  //   port: 5432,
  //   user: process.env.PG_USER,
  //   password: process.env.PG_PASSWORD,
  //   database: process.env.PG_DB,
  // });

  // await client.connect();
  // const res = await client.query('SELECT NOW()');
  // await client.end();
  return {
    orderId: 'SO123456',
    ...data,
  };
};
