props.2
import PropTypes from "prop-types";
props.1
mai
function PokemonCard({ pokemon }) {
  console.log(pokemon);

  return (
    <figure>
      {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : "???"}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imrSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
