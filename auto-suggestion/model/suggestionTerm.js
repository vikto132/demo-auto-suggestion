import { SuggestionTermTemplate } from "../constant/defaultOption.js";
import Structure from "./structure.js";

class SuggestionTerm extends Structure {
  constructor(source = [], settings = {}, template = SuggestionTermTemplate) {
    super(source, settings, template);
  }

  renderList() {
    if (this.settings.searchString) {
      this.source.forEach(item => {
        item.term = item.term.replace(this.settings.searchString.toLowerCase(), `<b>${this.settings.searchString.toLowerCase()}</b>`)
      })
    }
    return super.renderList();
  }

  render() {
    return `
    <div class="as-list-title">
      <span>Suggestion</span>
    </div>
    <ul class="as-list">
      ${this.renderList()}
    </ul>`
  }
}

export default SuggestionTerm;