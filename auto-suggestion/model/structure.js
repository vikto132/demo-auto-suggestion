class Structure {
  constructor(source = [], settings, template) {
    this.template = template;
    this.source = source;
    this.settings = settings;
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

  get getSettings() {
    return this.settings;
  }

  set setSettings(settings) {
    this.settings = settings;
  }

  renderNotFound() {
    const notFoundString = this.settings.notFoundString ? this.settings.notFoundString : 'Not found';
    if (this.settings.notFoundTemplate) {
      return this.settings.notFoundTemplate(notFoundString);
    }
    return `<li>${notFoundString}</li>`
  }

  renderList() {
    return this.source.length
      ? this.source.slice(0, this.settings.maxOccurrent ?? this.source.length).map(item => this.template(item)).join('')
      : this.renderNotFound()
  }

  render() {
    return this.template(this.source);
  }
}

export default Structure