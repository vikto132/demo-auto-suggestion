import Collection from "../model/collection.js";
import Product from "../model/product.js";
import SuggestionTerm from "../model/suggestionTerm.js";
import { isValidTemplate } from "../util/helper.js";
import { OuterTemplate } from '../constant/defaultOption.js'

const render = (data, { display, template }, searchString = '', root) => {
  const { suggestion, collection, product } = initObjectTemplate(data, template, display, searchString);
  const childTemplate = [
    getObjectTemplate(suggestion, searchString),
    getObjectTemplate(collection, searchString),
    getObjectTemplate(product, searchString),
  ].filter(item => item.template.length);

  childTemplate.sort((a, b) => a.order - b.order);

  const props = {
    children: childTemplate.map(item => item.template).join('')
  }

  const wrapper = isValidTemplate(template.container) ? template.container(props) : OuterTemplate(props);

  const container = root;
  container.innerHTML = wrapper;
}

const initObjectTemplate = ({ suggestion, product: productSource, collection: collectionSource }, template, display, searchString) => {
  const suggestionTerm = new SuggestionTerm(suggestion, {
    ...getConfig(display, 'suggestion'),
    searchString
  });
  const collection = new Collection(collectionSource, getConfig(display, 'collection'));
  const product = new Product(productSource, getConfig(display, 'product'));

  if (isValidTemplate(template.suggestion)) {
    suggestionTerm.setTemplate(template.suggestion);
  }

  if (isValidTemplate(template.collection)) {
    collection.setTemplate(template.collection);
  }

  if (isValidTemplate(template.product)) {
    product.setTemplate(template.product);
  }
  return {
    suggestion: suggestionTerm,
    collection,
    product
  }
}

const getObjectTemplate = (objTemplate, searchString) => {
  const { show, numbCharDisplay, order } = objTemplate.getSettings;
  if (!show || numbCharDisplay > searchString.length) return { template: '', order };
  return { template: objTemplate.render(), order };
}

const getConfig = ({ show, order, numbCharDisplay, maxOccurrent, notFoundTemplate, notFoundString }, key) => ({
  show: show[key],
  order: order[key],
  numbCharDisplay: numbCharDisplay[key],
  maxOccurrent: maxOccurrent[key],
  notFoundTemplate,
  notFoundString
})

export default render;