import React from "react";
import uuid from "uuid";
import "./StarWars.css";

import StarWar from "./StarWar";

const starWars = props =>
  props.starwarsChars.map(character => {
    return <StarWar key={uuid()} characters={character} />;
  });

export default starWars;
