import React,{useState} from 'react';
import { Navigator } from '../../Layouts/Navigator/Navigator';
import { InputUI } from '../../UI/InputUI/InputUI';
import { Card } from '../../UI/Card/Card';

export const GetCharacters = () => {

  const URL = "https://rickandmortyapi.com/api/character/?name=";

  const [cards, setCards] = useState([]);  

  const getCharacters = async (event) => {
    await fetch(URL+event.target.value)
    .then(response => response.json())     
    .then(data => setCards(data.results))
  }
   
  return (
    <div className='div-getAll'>
      <Navigator />
      <h2>Get All Character</h2>
      <hr />      
      <InputUI
        event={getCharacters}
        placeHolder="Looking Characters"
        className = "inputCard"
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
