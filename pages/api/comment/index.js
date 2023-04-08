import { MongoClient } from "mongodb";
import App from "next/app";
import { connectDatabase } from "../../../helpers/mongo";

export const getCommentData = async () => {
  const client = await connectDatabase();
  const db = client.db();
  const data = await db.collection("comment").find().toArray();
  client.close();
  return data;
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, comment } = req.body;
    // const client = await connectDatabase();
    const client = await MongoClient.connect(
      "mongodb+srv://maimoustafa9821:G8WjFQjSgEJ7Ykvc@cluster0.kdvvj3x.mongodb.net/ecomm?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("comment").insertOne(email, comment);
    client.close();
    res.status(201).json({ status: "success", comment: { email, comment } });
  } else {
    res.status(200).json({ message: "hello" });
  }
  // res.status(200).json({ message: "hello" });
}
