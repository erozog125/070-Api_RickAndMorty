import React from 'react';

export const Card = ({imageCharacter,nameCharacter, keyCard}) => {
  return (
    <div key={keyCard} className='card'>
      <img src={imageCharacter} alt={nameCharacter} />
      <h2>{nameCharacter}</h2>
    </div>
  )
}
