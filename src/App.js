import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import Character from "./components/character";
import { getAllCharacters } from "./utils/api";
import Characters from "./components/characters";

console.log(getAllCharacters());

function App() {
  const header = Header();

  const characters = Characters();
  const main = createElement("main", {
    //"main" Element wird erstellt
    className: "main", //classe wird vergeben
    children: [characters], //array "children" wird erstellt von "serviervorschlag" in "character.js"
  });

  async function getCharacters() {
    //asymetrische funktion erstellt
    const allCharacters = await getAllCharacters(); //neue variablable wird erstellt und sagt das auf die abfrage gewartet werden muss
    const newCharacters = allCharacters.map((
      character //map wird erstellt (ein neues array mit neuem wert "character")
    ) =>
      Character({
        //"Character" mit values
        name: character.name,
        imgSrc: character.image,
      })
    );

    main.append(...newCharacters); //"newCharacters" wir nun an "main" geheftet
  }

  getCharacters();

  const container = createElement("div", {
    children: [header, main],
  });

  return container;
}

export default App;
