import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import Character from "./components/character";
import { getCharacterById } from "./utils/api";

function App() {
  const header = Header();

  // const main = createElement("main");

  const character = Character({
    name: "Rick Sanchez",
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  });

  const character2 = Character({
    name: "Morty Smith",
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  });

  const main = createElement("main", {
    children: [character, character2],
  });

  const container = createElement("div", {
    children: [header, main],
  });
  console.log(getCharacterById(10));

  return container;
}

export default App;
