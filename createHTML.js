class AddHtmlElement {
  constructor() {}

  addElement({ container, type, text, htmlClass, ...elementObj }) {
    let htmlElement;
    switch (type) {
      case "div":
        htmlElement = document.createElement("div");
        if (htmlClass != undefined) {
          htmlElement.classList.add(htmlClass);
        }
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
        }
        container.appendChild(htmlElement);
        return htmlElement;
      case "img":
        htmlElement = document.createElement("img");
        if (htmlClass != undefined) {
          htmlElement.classList.add(htmlClass);
        }
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
        }
        container.appendChild(htmlElement);
        return htmlElement;
      case "ul":
        htmlElement = document.createElement("ul");
        if (htmlClass != undefined) {
          htmlElement.classList.add(htmlClass);
        }
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
        }
        container.appendChild(htmlElement);
        return htmlElement;
      case "li":
        htmlElement = document.createElement("li");
        if (htmlClass != undefined) {
          htmlElement.classList.add(htmlClass);
        }
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
        }
        htmlElement.innerHTML = text;
        container.appendChild(htmlElement);
        return htmlElement;
      case "button":
        htmlElement = document.createElement("button");
        if (htmlClass != undefined) {
          htmlElement.classList.add(htmlClass);
        }
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
        }
        htmlElement.innerHTML = text;
        container.appendChild(htmlElement);
        return htmlElement;
      case "table":
        htmlElement = document.createElement("table");
        if (htmlClass != undefined) {
          htmlElement.classList.add(htmlClass);
        }
        container.appendChild(htmlElement);
        return htmlElement;
      case "td":
        htmlElement = document.createElement("td");
        if (htmlClass != undefined) {
          htmlElement.classList.add(htmlClass);
        }
        htmlElement.innerHTML = text;
        container.appendChild(htmlElement);
        return htmlElement;
      case "tr":
        htmlElement = document.createElement("tr");
        if (htmlClass != undefined) {
          htmlElement.classList.add(htmlClass);
        }
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
        }
        container.appendChild(htmlElement);
        return htmlElement;
      case "th":
        htmlElement = document.createElement("th");
        if (htmlClass != undefined) {
          htmlElement.classList.add(htmlClass);
        }
        htmlElement.innerHTML = text;
        container.appendChild(htmlElement);
        return htmlElement;
      case "input":
        htmlElement = document.createElement("input");
        if (htmlClass != undefined) {
          htmlElement.classList.add(htmlClass);
        }
        for (const attribute in elementObj) {
          htmlElement.setAttribute(attribute, elementObj[attribute]);
        }
        container.appendChild(htmlElement);
        return htmlElement;
    }
  }
}

export { AddHtmlElement };
