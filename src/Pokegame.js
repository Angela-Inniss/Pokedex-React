import React from 'react';
import Pokedex from "./Pokedex";

const pokemon = [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
];

const PokeGame = () => {
  let hand1 = [];
  let hand2 = [...pokemon];
  while (hand1.length < hand2.length){
    let RandomIndex = Math.floor(Math.random() * hand2.length);
    let randomPokemon = hand2.splice(RandomIndex,1,)[0]; //?????? could be hand2.splice(3,1) start at index 3 and remove one element
    hand1.push(randomPokemon);
  }
// calculate total for each hand using reduce which adds up each element in an array, start from 0.
  let experienceOne =  hand1.reduce((acc, val) => {
    return acc + val.base_experience
  },0);
  // let experienceOne = hand1.reduce((acc, val) => acc + val, 0); // same thing implicit ES6 return
  let experienceTwo =  hand2.reduce((acc, val) => {
    return acc +  val.base_experience
  },0);

  return (
    // return jsx here:
    <div>
      <Pokedex pokemon={hand1} total={experienceOne} isWinner={experienceOne > experienceTwo} />
      <Pokedex pokemon={hand2} total={experienceTwo} isWinner={experienceTwo > experienceOne}/>
    </div>
  )
};

export default PokeGame;




