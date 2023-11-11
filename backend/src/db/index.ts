import mongoose from "mongoose";
import { MONGO_URL } from "../config";
import { logMessage, logObject } from "../utils/logs";
import { ERROR } from "../utils/constants";

export let TemplateRepository: any;

export const initDB = async () => {
  const DB_CONNECTION: string = (<string>MONGO_URL).toString();
  try {
    await mongoose.connect(DB_CONNECTION);
    const db = mongoose.connection;
    logMessage("Connected to DB");
  } catch (error: any) {
    logObject(error, ERROR);
  }
};
