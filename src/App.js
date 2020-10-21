import "./app.css";
import Header from "./components/Header";
import { createElement } from "./utils/elements";
import Character from "./components/character";
import { getAllCharacters } from "./utils/api";
import Characters from "./components/characters";
import Search from "./components/Search";

//console.log(getAllCharacters());

function App() {
  const header = Header(); //"Header" ist in "header.js" vordefiniert und wird damit reingeholt

  const characters = Characters();
  //wird erstellt in "characters.js" als "section" element zum stylen

  const main = createElement("main", {
    //"main" Element wird erstellt
    className: "main", //classe wird vergeben
    children: [characters], //array "children" wird erstellt von "serviervorschlag" in ("character.js")
  });

  async function getCharacters(name) {
    //welches name ist das?
    //asymetrische funktion erstellt
    const allCharacters = await getAllCharacters(name); //neue variablable wird erstellt und sagt das auf die abfrage gewartet werden muss
    const newCharacters = allCharacters.map((
      character //map wird erstellt (ein neues array mit neuem wert "character")
    ) =>
      Character({
        //"Character" mit values aus API von Website
        name: character.name, //"character" bezieht sich auf zeile 26
        imgSrc: character.image,
      })
    );
    main.innerHTML = "";
    main.append(...newCharacters); //"newCharacters" wir nun an "main" geheftet (spread operator) / warum nicht als children?
  }

  const search = Search({
    onchange: (value) => getCharacters(value),
  });

  getCharacters(); //was ist das?

  const container = createElement("div", {
    className: "container",
    children: [header, search, main], //warum wird nicht appended?
  });

  return container;
}

export default App;
