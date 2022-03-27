import { CollectionTemplate } from "../constant/defaultOption.js";
import Structure from "./structure";

class Collection extends Structure {
  constructor(source = {}, template = CollectionTemplate) {
    super(source, template);
  }
}

export default Collection;