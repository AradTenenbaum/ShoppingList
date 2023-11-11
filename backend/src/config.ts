import { config } from "dotenv";
config();

export const PORT = process.env.PORT;
export const CLIENT_URL = process.env.CLIENT_URL;
export const MONGO_URL = process.env.MONGO_URL;
