const fetchData = (str) => {
  return Promise.all([
    fetch('/assets/data/term.json'),
    fetch('/assets/data/collection.json'),
    fetch('/assets/data/product.json')
  ])
    .then(res => Promise.all(res.map(item => item.json())))
    .then(([term, collect, product]) => ({
      suggestion: term,
      collection: collect,
      product: product
    }));
}

export {
  fetchData
}