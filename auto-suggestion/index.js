import { initOption } from "./constant/defaultOption.js"
import { validateConfig, debounce } from "./util/helper.js";
import render from './view/index.js'

const initAutoSuggestion = (option) => {
  option = {
    ...initOption,
    ...option
  }
  if (!validateConfig(option)) {
    return;
  }
  console.log(option);
  const inputEl = document.getElementById(option.searchId);
  inputEl.addEventListener('keyup', debounce(() => {
    const str = inputEl.value;
    option.sourceData(str)
      .then(data => {
        render(data, option);
      })
      .catch(err => console.error(err));
  }, option.delay));
}

export {
  initAutoSuggestion
}