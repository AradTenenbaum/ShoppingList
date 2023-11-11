import { Request, Response } from "express";
import {
  addProductLogic,
  deleteProductLogic,
  getProductsLogic,
} from "../logic/product.logic";
import { logObject } from "../utils/logs";
import { ERROR } from "../utils/constants";
import { GeneralError } from "../utils/errors";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProductsLogic();
    return res.status(200).send({ products });
  } catch (error: any) {
    logObject(error, ERROR);
    return res.status(500).send(GeneralError);
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const result = await addProductLogic(req.body.name, req.body.category);

    if (result.error) {
      return res.status(400).send(result);
    }

    return res.status(200).send(result);
  } catch (error: any) {
    logObject(error, ERROR);
    return res.status(500).send(GeneralError);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const result = await deleteProductLogic(
      req.query.name as string,
      req.query.category as string
    );

    if (result.error) {
      return res.status(400).send(result);
    }

    return res.status(200).send(result);
  } catch (error: any) {
    logObject(error, ERROR);
    return res.status(500).send(GeneralError);
  }
};
