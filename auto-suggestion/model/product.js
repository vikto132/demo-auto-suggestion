import { ProductTemplate } from "../constant/defaultOption.js";
import Structure from "./structure.js";

class Product extends Structure {
  constructor(source = [], settings, template = ProductTemplate) {
    super(source, settings, template);
  }
  render() {
    return `
    <div class="as-list-title">
      <span>Products</span>
    </div>
    <ul class="as-list">
    ${this.renderList()}
    </ul>`
  }
}

export default Product;