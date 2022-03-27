
const debounce = (callback, time = 0) => {
  let lastCall = null;
  return function () {
    if (lastCall) clearTimeout(lastCall);
    lastCall = setTimeout(() => {
      callback();
    }, time);
  }
}

const validateConfig = (option) => {
  const el = document.getElementById(option.searchId);
  if (!el) {
    console.error('Input ID not exist');
    return false;
  }
  return true;
}

export {
  debounce,
  validateConfig
}