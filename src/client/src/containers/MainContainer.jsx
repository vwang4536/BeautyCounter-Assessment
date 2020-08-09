import React from 'react';
import axios from 'axios';
import FruitDisplay from '../components/FruitDisplay';
import Input from '../components/Input';

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fruits: [],
      displayError: false,
      errorText: '',
    }
  }

  getFruits = async () => {
    try {
      const response = await axios.get('http://localhost:3000/fruits');
      this.setState({
        fruits: response.data,
        displayError: false,
        errorText: ''
      });
    } catch (error) {
      console.log(error);
    }
  }

  getFruit = async (name) => {
    try {
      const response = await axios.get('http://localhost:3000/fruit', {
        params: {
          name: name
        }
      });

      this.setState({
        fruits: response.data,
        displayError: false,
        errorText: '',
      });
    } catch (error) {
      this.setState({
        fruits: [],
        displayError: true,
        errorText: error.response.data
      });
    }
  }

  render() {
    const { fruits, displayError, errorText } = this.state;
    const fruitDisplay = fruits.map((fruit) => {return <FruitDisplay key={fruit.name} fruit={fruit}/>});

    return (
      <div>
        <Input getFruit={this.getFruit}/>
        <button onClick={this.getFruits} type="button">Get All Fruits!</button>
        <div>
          {displayError ? <h3>{errorText}</h3> : fruitDisplay}
        </div>
      </div>
    );
  }
}

export default MainContainer;