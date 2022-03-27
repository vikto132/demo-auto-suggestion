import { SuggestionTermTemplate } from "../constant/defaultOption.js";
import Structure from "./structure";

class SuggestionTerm extends Structure {
  constructor(source = {}, template = SuggestionTermTemplate) {
    super(template, source);
  }
}

export default SuggestionTerm;