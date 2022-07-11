import React from 'react'
import styles from "./DetailCar.module.css"
const DetailCar = ({car}) => {
  return (
    <div className={styles.container}>
        <h2>  {car.name}</h2>
        <p> Cor: {car.color}</p>
        <p> KM:  {car.km}</p>
    </div>
  )
}

export default DetailCar