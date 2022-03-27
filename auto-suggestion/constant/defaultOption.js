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
    },
    maxOccurrent: {
      suggestion: 3,
      collection: 3,
      product: 3,
    },
    notFoundTemplate: null,
    notFoundString: ''
  },
  template: {
    suggestion: null,
    collection: null,
    product: null,
    container: null
  }
}

const SuggestionTermTemplate = (source) => {
  return `<li>${source.term}</li>`
}

const CollectionTemplate = (source) => {
  return `<li>${source.title}</li>`
}

const ProductTemplate = (source) => {
  return `
  <li>
    <div class="product-item-container">
     <div class="product-img-container">
      <img src="${source.image}" alt="${source.title}-${source.branch}"/>
     </div>  
     <div class="product-info-container">
      <h5 class="title">${source.title}</h5>
      <span class="brand">${source.brand}</span>
      <span><b>${source.price}</b></span>
     </div>
    </div>
  </li>`
}

const OuterTemplate = (props) => {
  return `
    <div class="as-container">
      ${props.children}
    </div>
  `
}

export {
  initOption,
  ProductTemplate,
  CollectionTemplate,
  SuggestionTermTemplate,
  OuterTemplate
}