import React from 'react';
import './StarWars.css';

const starWar = (props) => {
    const { name, skin_color, gender, hair_color, birth_year, eye_color, mass, height } = props.characters;
    return (<div className='StarWar'>

                <th><h3>{name}</h3></th>
        <table>
            <tbody>
                <tr>
                    <td><strong>Birth year: </strong> </td>
                    <td>{birth_year}</td>
                </tr>
                <tr>
                    <td><strong>Eye Color: </strong> </td>
                    <td>{eye_color}</td>
                </tr>
                <tr>
                    <td><strong>Gender: </strong> </td>
                    <td>{gender}</td>
                </tr>
                <tr>
                    <td><strong>Hair Color: </strong> </td>
                    <td>{hair_color}</td>
                </tr>
                <tr>
                    <td><strong>Height: </strong> </td>
                    <td>{height}cm</td>
                </tr>
                <tr>
                    <td><strong>Mass: </strong> </td>
                    <td>{mass}kg</td>
                </tr>
                <tr>
                    <td><strong>Skin Color: </strong> </td>
                    <td>{skin_color}</td>
                </tr>
            </tbody>
        </table>
        {/* <p>{birth_year}</p>
        <p><strong>Eye Color: </strong> {eye_color}</p>
        <p><strong>Gender: </strong> {gender}</p>
        <p><strong>Hair Color: </strong> {hair_color}</p>
        <p><strong>Height: </strong> {height}cm</p>
        <p><strong>Mass: </strong> {mass}km</p>
        <p><strong>Skin Color: </strong> {skin_color}</p> */}
   </div>
   )
}

export default starWar;