import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
const AWS = require('aws-sdk');

const client = new DynamoDBClient({ region: "us-east-1" });

export const params = {
    TableName: "airqualitydb"
}

export const scanTable = async () => {
    try {
      const data = await client.send(new ScanCommand(params));
      console.log("success", data);
      const payloadData = data.Items;
        return payloadData;

    } catch (err) {
      console.log("Error", err);
    }
  };

  export default async function handler(req, res) {
    try {
      const payload = await scanTable();
      res.status(200).json(payload);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  }
