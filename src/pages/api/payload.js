const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    apiVersion: 'latest',
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "airqualitydb"

const getPayload = async () => {
    const params = {
        TableName: TABLE_NAME
    };
    const payload = await dynamoClient.scan(params).promise();
    const payloadData = payload.Items
    console.log(payloadData);
    return payloadData;
}

export default async function handler(req, res) {
    try {
      const payload = await getPayload();
      res.status(200).json(payload);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  }
  
