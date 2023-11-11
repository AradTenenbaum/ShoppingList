import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getProducts,
} from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);
router.post("/", addProduct);
router.delete("/", deleteProduct);

export { router };
