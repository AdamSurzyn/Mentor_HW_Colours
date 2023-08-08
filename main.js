import { AddHtmlElement } from "./createHTML.js";

const coloursArr = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "pink",
  "orange",
  "brown",
  "black",
  "white",
  "gray",
  "gold",
  "silver",
  "navy blue",
  "sky blue",
  "lime green",
  "teal",
  "indigo",
  "magenta",
  "violet",
  "khaki",
  "salmon",
  "crimson",
  "lavender",
  "plum",
  "blue violet",
  "olive",
  "cyan",
  "maroon",
  "beige",
];

function main() {
  const htmlClass = new AddHtmlElement();
  const generalContainer = document.querySelector(".container");
  const colourSearchInputObj = {
    container: generalContainer,
    type: "input",
    placeholder: "Insert Colour!",
    htmlClass: "colour-search",
    name: "",
  };
  const colorUlObj = {
    container: generalContainer,
    type: "ul",
    htmlClass: "current-colours",
    text: "",
  };

  const colourSearchInput = htmlClass.addElement(colourSearchInputObj);
  const colorUl = htmlClass.addElement(colorUlObj);
  colourSearchInput.setAttribute("type", "text");
  colourSearchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let name = e.srcElement.value;
      let filteredColours = searchColours(name);
      renderColours(filteredColours, htmlClass, colorUl);
    }
  });
  renderColours(coloursArr, htmlClass, colorUl);
}

const searchColours = (input) => {
  const matches = coloursArr.filter((colour) => {
    return colour.includes(input);
  });
  return matches;
};

const renderColours = (colours, htmlClass, container) => {
  container.replaceChildren();
  colours.forEach((colour) => {
    let colourEl = {
      container: container,
      type: "li",
      htmlClass: "colour",
      text: colour,
    };
    htmlClass.addElement(colourEl);
  });
};

main();
