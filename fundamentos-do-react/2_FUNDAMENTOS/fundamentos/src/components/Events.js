import React from 'react'

const Events = () => {

    const handleMyEvent= (event) =>{
        console.log(event);

    };
    
    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso !</h1>;

        } else {
            return <h1>Também posso renderizar isso !</h1>;

        }
    }

  return (
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique aqui!</button>
        </div>
        <div>
            <button onClick={() => console.log("Clicou")}>Clique aqui!</button>
            <button onClick={() => {
                if (true){
                    console.log("Isso não deveria existir")
                }
            }}>Clique aqui!</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}

    </div>
  )
}

export default Events