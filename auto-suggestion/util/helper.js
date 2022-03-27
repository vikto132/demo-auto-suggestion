
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

const isValidTemplate = (template) => {
  return template && typeof template === 'function';
}

const copyOptions = (source, destination = {}) => {
  Object.entries(source).forEach(([key, value]) => {
    if (typeof value === 'object' && value != null) {
      destination[key] = destination ? copyOptions(value, destination[key]) : value;
    }
    if (destination[key] == null) {
      destination[key] = value;
    }
  });
  return destination;
}

export {
  debounce,
  validateConfig,
  isValidTemplate,
  copyOptions
}