// config.ts
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://aryan:aryandotkumawat@cluster0.apvsf1o.mongodb.net/solarisdb";
const client = new MongoClient(uri);

export default client;
