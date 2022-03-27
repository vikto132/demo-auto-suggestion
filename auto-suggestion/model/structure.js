class Structure {
  constructor(source, template) {
    this.template = template;
    this.source = source;
  }

  get getTemplate() {
    return this.template;
  }

  set setTemplate(template) {
    this.template = template;
  }

  get getSource() {
    return this.source;
  }

  set setSource(source) {
    this.source = source;
  }

  render() {
    return this.template(this.source);
  }
}

export default Structure