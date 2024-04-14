class DOMApi {
  constructor() {}
  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
      className
        .trim()
        .split(" ")
        .forEach((name) => {
          element.classList.add(name);
        });
    }
    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }
}

export default new DOMApi();
