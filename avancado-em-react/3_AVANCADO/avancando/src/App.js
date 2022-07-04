import { useState } from "react";
import "./App.css";
import Imagem from "./assets/imagem1.jpg";
// components
import CarDetails from "./components/CarDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Fragment from "./components/Fragment";
import ListRender from "./components/ListRender";
import ManegeData from "./components/ManegeData";
import Message from "./components/Message";
import ShowUserName from "./components/ShowUserName";
import UserDetails from "./components/UserDetails";

function App() {
 // const name = "Frodo"
  const [userName] = useState("Pedro");

  const cars=[
    {id: 1, brand: "Ferrari", color:"Amarela", newCar: true, km:0},
    {id: 2, brand: "KIA", color:"Preto", newCar: false, km:5458},
    {id: 3, brand: "Renault", color:"Branco", newCar: true, km:0},
  ]

  const people=[
    {id: 1, name: "Adriane", age:27, profession:"Desenvolvedor"},
    {id: 2, name: "Luis", age:25, profession: "Estudante"},
    {id: 3, name: "Frodo", age:8, profession: "Estudante"},
  ]

  function showMessage () {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg);
  }
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        {/*Imagem em public */}
        <img src="/imagem2.jpg" alt="paisagem" width="48%" />
      </div>
      <div>
        {/*Imagem em asset (mais utilizado) */}
        <img src={Imagem} alt="paisagem" width="48%" />
      </div>
      <ManegeData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      {/*<ShowUserName name= "Adriane"/>*/}
      {/*<ShowUserName name= {name}/>*/}
      <ShowUserName name= {userName}/>
      {/* destructuring*/}
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false}/>
      {/*Reaproveitando*/}
      <CarDetails brand="Ford" km={0} color="Vermelha" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>

      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <div>
          <CarDetails 
          key={ car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}/>
        </div>
      ))}
      {/* fragment*/}
      <Fragment/>
        {/*children*/}
      <Container myValue="teste">
        <p>Essse é o conteúdo</p>
      </Container>
       {/*executar função*/}
       <ExecuteFunction myFunction={showMessage}/>
       {/*state lift*/}
      <Message msg={message}/>
      <ChangeMessageState  handleMessage={ handleMessage}/>
       {/*Exercício*/}
      {people.map((person)=>(
        <UserDetails
          key={ person.id}
          name={person.name} 
          age={person.age} 
          profession={person.profession} 
          />
      ))}
    </div>
  );
}

export default App;
