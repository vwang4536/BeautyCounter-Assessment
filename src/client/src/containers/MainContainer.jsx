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

      this.resetError();
      this.setState({
        fruits: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getFruit = async (name) => {
    if (name) {
      try {
        const response = await axios.get('http://localhost:3000/fruit', {
          params: {
            name: name
          }
        });
  
        this.resetError();
        this.setState({
          fruits: response.data,
        });
      } catch (error) {
        this.onDisplayError(error.response.data);
        this.setState({
          fruits: [],
        });
      }
    } else {
      this.onDisplayError('Fruit name is missing in the input box! :(');
    }
  }

  onDisplayError = (error) => {
    this.setState({
      displayError: true,
      errorText: error
    });
  }

  resetError = () => {
    this.setState({
      displayError: false,
      errorText: ''
    });
  }

  render() {
    const { fruits, displayError, errorText } = this.state;
    const fruitDisplay = fruits.map((fruit) => {return <FruitDisplay key={fruit.name} fruit={fruit}/>});

    return (
      <div className="mainContainer">
        <div>
          <h1>Fruit Dictionary</h1>
        </div>
        <div>
          <h2>Input a fruit name into the input box below to look at info of fruits!</h2>
        </div>
        <div>
          <Input getFruit={this.getFruit}/>
          <h2>Or click this button to view all fruits!</h2>
          <button className="fruitButton" onClick={this.getFruits} type="button">Get All Fruits!</button>
        </div>
        <div className="fruitDisplayContainer">
          {displayError ? <h3>{errorText}</h3> : fruitDisplay}
        </div>
      </div>
    );
  }
}

export default MainContainer;