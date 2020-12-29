import React from 'react'
// import characterImages from '../data/starWars'
import "../styles/index.css";

function Main(props) {
    return(
        <main>
            <h1>Star Wars Characters</h1>
            <div className="container" >
                {props.character.pic ? <img src={props.character.pic} height="200" alt=""/> : <p>No Picture available</p>}
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