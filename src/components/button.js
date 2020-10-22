import { createElement } from "../utils/elements";
import "./button.css";

function button(props) {
  const loadButton = createElement("button", {
    className: "loadButton",
    ...props,
  });

  return loadButton;
}

export default button;
