function NavBar({ pokemonList, selectedPokemon }) {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => selectedPokemon(index)}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

export default NavBar;
