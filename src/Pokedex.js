import React from 'react';
import PokeCard from "./PokeCard";

import "./Pokedex.css";

const Pokedex = (props) => {
  let title;
  if (props.isWinner) {
   title = <h1 className="Pokedex-winner">Winning Hand </h1>
  } else {
    title = <h1 className="Pokedex-loser">Losing Hand</h1>
  }

return (
  <React.Fragment>
      <div className="Pokedex-headings">
        <h1>Pokedex!</h1>
        <h4>Total experience: {props.total}</h4>
        {title}
      </div>
    <div className="Pokedex">
      {/*{props.isWinner ? "Winner" : "Loser"}*/}
      {props.pokemon.map(card => (
        <div>
          <PokeCard
            className=""
            name={card.name}
            type={card.type}
            experience={card.base_experience}
            id={card.id}
          />
        </div>
      ))}
    </div>
  </React.Fragment>
)
};


export default Pokedex;

// this component takes a prop of "pokemon" which will be supplied from the component it is being used in
// once it has the data it expects it will map over it and display PokeCards
