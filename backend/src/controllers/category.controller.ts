import { Request, Response } from "express";
import { getCategoriesLogic } from "../logic/category.logic";
import { logObject } from "../utils/logs";
import { ERROR } from "../utils/constants";
import { GeneralError } from "../utils/errors";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getCategoriesLogic();
    return res.status(200).send({ categories });
  } catch (error: any) {
    logObject(error, ERROR);
    return res.status(500).send(GeneralError);
  }
};
