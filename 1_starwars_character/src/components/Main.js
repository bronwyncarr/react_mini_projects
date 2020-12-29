import React from 'react'
import {characterImages} from '../data/starWars'
import "../styles/index.css";

// Accepts each object in the array that came from SWAPI as props.
// Displays information for the character.
function Main(props) {
    // Looks through the characterImages array for a name that matches the one passed in as props.
    // If found, that picture is assigned to the pic variable which, if exists is displayed.
    let pic
    let character = characterImages.find((person) => person.name === props.character.name)
    character && (pic = character.pic)

    return(
        <main>
            <h1>Star Wars Characters</h1>
            <div className="container" >
                {pic ? <img src={pic} height="200" alt=""/> : <p>No Picture available</p>}
                    <h2>{props.character.name}</h2>
                    <p>Height: {props.character.height} cm</p>
                    <p>Mass: {props.character.mass} kg</p>
                    <p>Hair Color: {props.character.hair_color}</p>
                    <p>Eye Color: {props.character.eye_color}</p>
                    <p>Birth Year: {props.character.birth_year}</p>
                    {props.character.gender === 'n/a' ? <p>Gender: Character is a alien</p> : <p>Gender: {props.character.gender}</p>}
                <hr />
            </div>
        </main>
    )
}

export default Main