import React, { useState } from 'react'

const ConditionalRender = () => {
    const [X] = useState(true)
    
    const [ name, setName ] = useState ("Adriane")
  return (
    <div>
        <h1>Isso será exibido ?</h1>
        {X && <p> Se x for true, sim !</p>}
        {!X && <p>Agora x é falso</p> }
        <h1>If ternário</h1>
        {name === "João" ? (
            <div>
                <p>O nome é Jão</p>
            </div>
        ) : (
            <div>
                <p> Nome não encontrado</p>
            </div>
        )}
        <button onClick={() => setName("João")}> Clique aqui !</button>
    </div>
  );
};

export default ConditionalRender