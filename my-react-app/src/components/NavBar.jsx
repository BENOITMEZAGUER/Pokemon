import PokemonCard from "./PokemonCard";

function NavBar({
  handleClickPrevious,
  handleClickNext,
  pokemonIndex,
  pokemonList,
}) {
  return (
    <div>
      {pokemonIndex > 0 && (
        <button onClick={handleClickPrevious}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickNext}>Suivant</button>
      )}
      ;
    </div>
  );
}

export default NavBar;
