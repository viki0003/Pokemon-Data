import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchPokeData = (props) => {
  const [pname, setPName] = useState("Pikachu");
  const [pimg, setPImg] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  );
  const [pmoves, setPMoves] = useState("Mega-Punch");
  const [weight, setWeight] = useState("60");
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${props.pokeName}`
      );
      console.log(res);
      setPName(res.data.name);
      setPImg(res.data.sprites.front_default);
      setPMoves(res.data.moves[0].move.name);
      setWeight(res.data.weight);
    }
    getData();
  });
  return (
    <React.Fragment>
      <div className="Poke-Data">
        <div className="Poke-Img">
          <img src={pimg} alt="poke-img" />
        </div>
        <div className="Poke-Content">
          <h2>Name: {pname}</h2>
          <h3> Move Name: {pmoves} </h3>
          <h3> Weight : {weight} </h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchPokeData;
