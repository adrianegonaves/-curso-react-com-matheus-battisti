import "./App.css";
import DetailCar from "./components/DetailCar";

function App() {
  const cars = [
    { name: "Ferrari", color: "Amarela", km: 0 },
    { name: "KIA", color: "Preto", km: 5458 },
    { name: "Renault", color: "Branco", km: 0 },
  ];
  return (
    <div className="App">
      <h1>Carros</h1>
      <div className="card-car">
        {cars.map((car) => (
          <DetailCar car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;
