import React from 'react'
import { characters } from '../data/starWars'
import "../styles/index.css";

const Main = () => {
    return(
        <main>
            <h1>Star Wars Characters</h1>
            {characters.map((character, index) => {
                return(
                    <div className="container" key={index}>
                        {character.pic ? <img src={character.pic} height="200" alt=""/> : <p>No Picture available</p>}
                            <h2>{character.name}</h2>
                            <p>Height: {character.height} cm</p>
                            <p>Mass: {character.mass} kg</p>
                            <p>Hair Color: {character.hair_color}</p>
                            <p>Eye Color: {character.eye_color}</p>
                            <p>Birth Year: {character.birth_year}</p>
                            {character.gender === 'n/a' ? <p>Gender: Character is a alien</p> : <p>Gender: {character.gender}</p>}
                        <hr />
                    </div>
                )
            })}
        </main>
    )
}

export default Main