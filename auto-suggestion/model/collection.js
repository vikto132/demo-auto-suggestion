import { CollectionTemplate } from "../constant/defaultOption.js";
import Structure from "./structure.js";

class Collection extends Structure {
  constructor(source = [], settings, template = CollectionTemplate) {
    super(source, settings, template);
  }
  render() {
    return `
    <div class="as-list-title">
      <span>Collections</span>
    </div>
    <ul class="as-list">
    ${this.renderList()}
    </ul>`
  }
}

export default Collection;