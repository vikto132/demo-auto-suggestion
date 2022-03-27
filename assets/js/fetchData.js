const fetchData = (str) => {
  return Promise.all([
    fetch('/assets/data/term.json'),
    fetch('/assets/data/collection.json'),
    fetch('/assets/data/product.json')
  ])
    .then(res => Promise.all(res.map(item => item.json())))
    .then(([term, collect, product]) => ({
      suggestion: term.filter(item => item.term.includes(str)).map(item => ({ ...item, term: item.term.toLowerCase() })),
      collection: collect.filter(item => item.title.includes(str)),
      product: product.filter(item => item.title.includes(str))
    }));
}

export {
  fetchData
}