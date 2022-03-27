import { initOption } from "./constant/defaultOption.js"
import { validateConfig, debounce, copyOptions } from "./util/helper.js";
import render from './view/index.js'
import { emptyRoot, getRoot } from "./view/root.js";

const initAutoSuggestion = (option) => {
  option = copyOptions(initOption, option);
  if (!validateConfig(option)) {
    return;
  }
  console.log(option);
  const root = getRoot(option.searchId);
  const inputEl = document.getElementById(option.searchId);
  inputEl.addEventListener('keyup', debounce(() => {
    const str = inputEl.value;
    option.sourceData(str)
      .then(data => {
        emptyRoot(root)
        render(data, option, str, root);
      })
      .catch(err => console.error(err));
  }, option.delay));
}



export {
  initAutoSuggestion
}