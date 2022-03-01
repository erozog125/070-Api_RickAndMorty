import React,{useState} from 'react';

import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';
import { Navigator } from '../../Layouts/Navigator/Navigator';
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
      <ButtonUI      
        event={getCharacters}
        txtButton="Get All Characters"
        className="btnGet"
      />
      <main className='render-cards'>          
        {          
          cards.map(element => (            
            <Card keyCard={element.id} imageCharacter={element.image} nameCharacter={element.name} />
          ))
        }
      </main>
    </div>
  )
}
