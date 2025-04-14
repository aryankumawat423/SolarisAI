'use server'

import client from "./config";
import { Db, Collection } from "mongodb";

export async function saveResult(
  collectionName: string,
  result: object
): Promise<string | null> {
  try {
    const db: Db = client.db("solarisdb");
    const collection: Collection = db.collection(collectionName);
    const insertResult = await collection.insertOne(result);
    return insertResult.insertedId.toString();
  } catch (error) {
    console.error("Error saving result to database:", error);
    return null;  }
}
