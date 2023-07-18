import { MongoClient } from "mongodb";

export const connect = async () => {
  console.log("mongod", process.env.MONGODB_URI);
  const client = new MongoClient(process.env.MONGODB_URI || "", {});
  await client.connect();
  return client;
};

export const close = async (client: MongoClient) => {
  await client.close();
};

export const getUser = async (client: MongoClient, username: string) => {
  const database = client.db("tmi");
  const users = database.collection("users");
  return await users.findOne({ username });
};

export const addUser = async (
  client: MongoClient,
  username: string,
  password: string,
  salt: string
) => {
  const database = client.db("tmi");
  const users = database.collection("users");

  return await users.insertOne({ username, password, salt });
};
