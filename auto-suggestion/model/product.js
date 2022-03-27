import { ProductTemplate } from "../constant/defaultOption.js";
import Structure from "./structure";

class Product extends Structure {
  constructor(source = {}, template = ProductTemplate) {
    super(source, template);
  }
}

export default Product;