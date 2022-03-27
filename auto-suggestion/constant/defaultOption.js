const initOption = {
  searchId: '',
  sourceData: (searchString) => ({
    suggestion: [],
    collection: [],
    product: []
  }),
  delay: 100,
  display: {
    show: {
      suggestion: true,
      collection: true,
      product: true
    },
    order: {
      suggestion: 1,
      collection: 2,
      product: 3,
    },
    numbCharDisplay: {
      suggestion: 1,
      collection: 1,
      product: 1,
    }
  },
  template: {
    suggestion: null,
    collection: null,
    product: null,
    container: null
  }
}

const SuggestionTermTemplate = (source) => {
  return ``
}

const CollectionTemplate = (source) => {
  return ``
}

const ProductTemplate = (source) => {
  return ``
}

export {
  initOption,
  ProductTemplate,
  CollectionTemplate,
  SuggestionTermTemplate
}