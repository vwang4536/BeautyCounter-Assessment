import React, { FunctionComponent } from 'react';
import { FruitPropsModel } from '../../models/FruitDisplay.models';

// Presentational Component for Fruits
const FruitDisplay: FunctionComponent<FruitPropsModel> = (props: FruitPropsModel) => {
  let { fruit } = props;

  return (
    <div className="fruitDisplay">
      <img className="fruitImage" key={fruit.name} src={fruit.image} alt={fruit.name}/>
      <div>
        <p>Name: {fruit.name}</p>
        <p>Weight: {fruit.weight} grams</p>
      </div>
    </div>
  );
}

export default FruitDisplay;