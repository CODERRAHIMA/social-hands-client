import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGO_URI as string);
const db = client.db("socialHands");

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
    minPasswordLength: 6, 
  },
  database: mongodbAdapter(db, {
    client,
  }),
});