props.1
function PokemonCard({ pokemon }) {
  console.log({ pokemon });

  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : "???"}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
