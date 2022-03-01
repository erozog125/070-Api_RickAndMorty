import React from 'react';

export const ButtonUI = ({event,txtButton,className}) => {
  return (
    <button className={className} onClick={event}>{txtButton}</button>
  )
}
