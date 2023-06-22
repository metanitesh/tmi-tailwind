// import { AddUser } from "@lib/db";
import { connect, close } from "../../../lib/db";

import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const { username, password } = data;

  if (!username || !password)
    return NextResponse.json({ message: "Username or password is empty" });

  const salt = await bcrypt.genSalt(10);
  const client = await connect();
  const database = client.db("tmidb");
  const userdb = database.collection("users");

  const user = await userdb.findOne({ username });

  if (user) {
    return NextResponse.json({ message: "User already exist" });
  }

  const hashedPassword = await bcrypt.hash(password, salt);
  const insert = await userdb.insertOne({ username, hashedPassword, salt });
  close(client);
  return NextResponse.json({ message: "Successfully registered", insert });
}
