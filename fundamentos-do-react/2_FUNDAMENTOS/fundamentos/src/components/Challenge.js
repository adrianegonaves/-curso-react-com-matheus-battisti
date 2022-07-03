import React from 'react'

const Challenge = () => {

    const A = 1;
    const B = 2;

  return (
    <div>
        <p>Valor a: {A} </p>
        <p>Valor b: {B} </p>
        <button onClick={() => console.log(A+B)}> Calcular</button>
    </div>
  )
}

export default Challenge