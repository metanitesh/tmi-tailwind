import { MongoClient } from "mongodb";

export const connect = async () => {
  const client = new MongoClient(process.env.MONGO_URL || "", {});
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
