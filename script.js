const uri="https://pokeapi.co/"
const pokemonContainer = document.getElementById("pokemon-container");
const searchInput = document.getElementById("search");
let pokemon = [];
function handleSearch(target) {
    const search = target.value.toLowerCase();
    const searchMatch = pokemon.filter((element) => {
      const name = element.name.common.toLowerCase();
      return name.includes(search);
    });
    renderCards(searchMatch);
  }
  async function fetchData() {
    const response = await fetch(uri);
    const data = await response.json();
    if (data.length > 0) {
      pokemon = [...data];
      renderCards(pokemon);
    }
  }
  fetchData();
function renderCards(data = []) {
    let cards = [];
  for (let i = 0; i < data.length; i++) {
    cards.push(createCard(data[i]));
  }
  pokemonContainer.innerHTML = "";
  pokemonContainer.append(...cards);
}
function createCard(data = {}) {
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let subHeading = document.createElement("p");
    let moves = document.createElement("p")
    let weights=document.createElement("p")
    card.setAttribute("class", "card");
    const { name = [], abilites = "", move ="" , weight =""} = data;
  title.innerText = name["common"];
  subHeading.innerText = abilities["common"];
  moves.innerText=moves;
  weights.innerText=weigths;
  card.append(title, subHeading,moves,weights);
  return card;
}