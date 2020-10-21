import "./character.css";
import { createElement } from "../utils/elements";

function Character({ name, imgSrc }) {
  const title = createElement("div", {
    className: "h3",
    innerText: name,
  });
  const avatar = createElement("img", {
    src: imgSrc,
    alt: name,
  });
  const characterContainer = createElement("div", {
    className: "card",
  });
  const container = createElement("div", {
    className: "character",
    children: [characterContainer, title, avatar],
  });

  return container;
}

export default Character;
