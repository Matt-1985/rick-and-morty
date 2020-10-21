export async function getCharacterById(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const character = await response.json();

  return character;
}

export async function getAllCharacters(name) {
  let url = `https://rickandmortyapi.com/api/character/`;
  if (name) {
    url += `?name=${name}`;
  }
  const response = await fetch(url);
  const characterAll = await response.json();

  return characterAll.results;
}
