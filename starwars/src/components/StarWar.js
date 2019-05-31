import React from "react";
import "./StarWars.css";

const starWar = props => {
  const {
    name,
    skin_color,
    gender,
    hair_color,
    birth_year,
    eye_color,
    mass,
    height
  } = props.characters;
  return (
      <div className="StarWar">
        <h3>{name}</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Birth year: </strong>{" "}
              </td>
              <td>{birth_year}</td>
            </tr>
            <tr>
              <td>
                <strong>Eye Color: </strong>{" "}
              </td>
              <td>{eye_color}</td>
            </tr>
            <tr>
              <td>
                <strong>Gender: </strong>{" "}
              </td>
              <td>{gender}</td>
            </tr>
            <tr>
              <td>
                <strong>Hair Color: </strong>{" "}
              </td>
              <td>{hair_color}</td>
            </tr>
            <tr>
              <td>
                <strong>Height: </strong>{" "}
              </td>
              <td>{height}cm</td>
            </tr>
            <tr>
              <td>
                <strong>Mass: </strong>{" "}
              </td>
              <td>{mass}kg</td>
            </tr>
            <tr>
              <td>
                <strong>Skin Color: </strong>{" "}
              </td>
              <td>{skin_color}</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
};

export default starWar;
