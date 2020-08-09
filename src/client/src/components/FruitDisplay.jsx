import React from 'react';

const FruitDisplay = (props) => {
  let { fruit } = props;
  
  return (
    <div>
      <img className="fruitImage" key={fruit.name} src={fruit.image} alt={fruit.name}/>
      <div>
        <p>Name: {fruit.name}</p>
        <p>Weight: {fruit.weight} grams</p>
      </div>
    </div>
  )
}

export default FruitDisplay;