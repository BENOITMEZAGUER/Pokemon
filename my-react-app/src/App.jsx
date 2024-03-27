import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div>
       props.1
      <PokemonCard pokemon={pokemonList[1]} />
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
    name: "mew",
  },
];
export default App;
