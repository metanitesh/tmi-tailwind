import jwt from "jsonwebtoken";
import { connect, close } from "../../../lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request, response: Response) {
  const data = await request.json();
  const { username, password } = data;

  if (!username || !password)
    return NextResponse.json({ message: "Username or password is empty" });

  try {
    const client = await connect();
    const database = client.db("tmidb");
    const userdb = database.collection("users");

    const user = await userdb.findOne({ username });
    console.log(user);

    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 401 }
      );
    }

    console.log("user found");

    const match = await bcrypt.compare(password, user.hashedPassword);
    console.log("match", match);

    if (!match) {
      return NextResponse.json(
        { message: "Password is incorrect" },
        { status: 401 }
      );
    }

    console.log("jwt");
    console.log(process.env);
    console.log(process.env.JWT_SECRET);
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET not found");
    }

    console.log(process.env.JWT_SECRET);
    const token = jwt.sign(username, process.env.JWT_SECRET);

    console.log("token", token);

    return NextResponse.redirect(new URL("/protected", request.url), {
      headers: {
        "Set-Cookie": `token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=31536000`,
      },
    });
    // return NextResponse.json(
    //   {
    //     token: token,
    //   },
    //   {
    //     status: 200,
    //     headers: {
    //       "Set-Cookie": `token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=31536000`,
    //     },
    //   }
    // );
    // return jwt.sign({ username }, process.env.JWT_SECRET,)}
  } catch (error: any) {
    console.log("catch", error);
    NextResponse.json({ message: error.message }, { status: 500 });
  }
}
