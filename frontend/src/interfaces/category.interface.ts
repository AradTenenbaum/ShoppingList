import { Products } from "./product.interface";

export interface Categories {
  [name: string]: Products;
}

export interface CategoryObject {
  name: string;
}
