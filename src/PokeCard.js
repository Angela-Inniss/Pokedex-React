
import React from "react";
import './Pokecard.css';
const PokeCard = (props) => {
  const imgBaseURL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
   let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
   // padToThree explanation:  if the number is 23 we add two zeros e.g. 0023 and then slick the back 3 ending up with 023
  let imgSrc = `${imgBaseURL}${padToThree(props.id)}.png`;
  return (
    <div className="Pokecard">
     <h2 className="Pokecard-name">{props.name}</h2>
      <div className="Pokecard-image">
        <img alt="pokemon-character" src={imgSrc}/>
      </div>
      <div className="Pokecard-data">Type:{props.type}</div>
      <div className="Pokecard-data"> Experience: {props.experience}</div>
    </div>
  )
};

export default PokeCard;


