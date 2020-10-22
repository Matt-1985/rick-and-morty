import "./header.css";
import { createElement } from "../utils/elements";

function Header() {
  const header = createElement("h1", {
    className: "header",
    innerText: "Rick & Morty",
  });
  return header;
}

export default Header;
