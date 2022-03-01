import React,{useState} from 'react';
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';
import { Navigator } from '../../Layouts/Navigator/Navigator';
import rickandmorty from '../../../Images/rick-morty-pelicula.jpg';
import { Card } from '../../UI/Card/Card';

export const GetEveryBody = () => {

  const URL = "https://rickandmortyapi.com/api/character";

  const [cards, setCards] = useState([]);  

  const getCharacters = async () => {
    await fetch(URL)
    .then(response => response.json())     
    .then(data => setCards(data.results))
  }
   
  return (
    <div className='div-getAll'>
      <Navigator />
      <h2>Get All Character</h2>
      <hr />
      {/* <Card imageCharacter={cards[0].image} nameCharacter={cards[0].name} /> */}
      <ButtonUI
      // Vamos a proceder a dar uso a esta función que llamará el botón por medio del evento onClick
        event={getCharacters}
        txtButton="Get All Characters"
        className="btnGet"
      />
      <main className='render-cards'>  
        {console.log(cards)}
        {          
          cards.map(element => (
            // Recordemos que todo elemento que se renderiza, debe diferenciarse por medio de una key                       
            <Card imageCharacter={element.image} nameCharacter={element.name} />
          ))
        }
      </main>
    </div>
  )
}
