import React from 'react';

const FruitDisplay = (props) => {
  let { fruit } = props;
  console.log('fruity', fruit)
  return (
    <div>
      <img src={fruit.img} alt={fruit.name}/>
      <div>
        <p>Name: {fruit.name}</p>
        <p>Weight: {fruit.weight} grams</p>
      </div>
    </div>
  )
}

export default FruitDisplay;