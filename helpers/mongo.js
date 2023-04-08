import { MongoClient } from "mongodb";

export const connectDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://maimoustafa9821:G8WjFQjSgEJ7Ykvc@cluster0.kdvvj3x.mongodb.net/ecomm?retryWrites=true&w=majority"
  );
  return client;
};
