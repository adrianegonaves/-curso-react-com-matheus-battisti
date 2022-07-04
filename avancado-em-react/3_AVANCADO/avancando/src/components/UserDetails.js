import React from 'react'

const UserDetails = ({name, age, profession}) => {
   
    
  return (
    <div>
        <h2>Exercício</h2>
        <h2>{name}</h2>
        <p>Idade: {age}</p>
        <p>Profissão: {profession}</p>
        {age >= 18?(
            <p>Pode tirar a carteira de motorista</p>
        ):(
            <p>Não pode tirar a carteira de motorista</p>
        )}
        
    </div>
  )
}

export default UserDetails