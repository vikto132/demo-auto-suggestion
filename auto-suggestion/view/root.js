const getRoot = (posElId) => {
  const root = document.createElement('div');
  root.style = calculatePosition(posElId);
  document.body.appendChild(root);
  window.addEventListener('click', (event) => {
    const el = document.getElementById(posElId);
    if (!root.contains(event.target) && el !== event.target) {
      root.style.visibility = 'hidden';
    }
  });
  return root;
}

const calculatePosition = (posElId) => {
  const el = document.getElementById(posElId);
  const { top, left, height, width } = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return `position:absolute;top:${top + scrollTop + height + 20}px;left:${left + scrollLeft}px;width:${width * 1.5}px;overflow:visible`
}

const emptyRoot = (root) => {
  Array.from(root.getElementsByClassName('as-list')).forEach(item => item.innerHTML = '');
  root.style.visibility = 'visibility'
}

export {
  getRoot,
  emptyRoot
}