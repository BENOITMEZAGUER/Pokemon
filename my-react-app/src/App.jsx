import NavBar from "./components/NavBar";
import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);

  const pokemon = pokemonList[pokemonIndex];

  const handleClickPrevious = () => {
    setpokemonIndex(pokemonIndex - 1);
  };

  const handleClickNext = () => {
    setpokemonIndex(pokemonIndex + 1);
  };

  return (
    <div>
      <NavBar
        handleClickPrevious={handleClickPrevious}
        handleClickNext={handleClickNext}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
      />
      <PokemonCard pokemon={pokemon} />;
    </div>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "mew",
  },
];

export default App;
