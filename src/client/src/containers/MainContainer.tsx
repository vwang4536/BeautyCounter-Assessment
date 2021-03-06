import React from 'react';
import axios from 'axios';
import FruitDisplay from '../components/FruitDisplay';
import Input from '../components/Input';
import {
  FruitResponseModel,
  MainContainerStateModel
  }  from '../../models/MainContainer.models';

class MainContainer extends React.Component<object, MainContainerStateModel> {
  constructor(props: object) {
    super(props)
    this.state = {
      fruits: [],
      displayError: false,
      errorText: '',
    }
  }

  // Grabs all fruits
  getFruits = async (): Promise<FruitResponseModel[] | string> => {
    try {
      const response = await axios.get('http://localhost:4000/fruits');

      this.resetError();
      this.setState({
        fruits: response.data,
      });

      return response.data;
    } catch (error) {
      console.log(error);
      this.onDisplayError(error.response.data);
      this.setState({
        fruits: [],
      });

      return error.response.data;
    }
  }
  
  // Grabs one fruit
  getFruit = async (name: string): Promise<FruitResponseModel[] | string> => {
    if (name) {
      try {
        const response = await axios.get('http://localhost:4000/fruit', {
          params: {
            name: name
          }
        });
  
        this.resetError();
        this.setState({
          fruits: response.data,
        });

        return response.data;
      } catch (error) {
        console.log(error.response)
        this.onDisplayError(error.response.data);
        this.setState({
          fruits: [],
        });

        return error.response.data;
      }
    } else {
      const err = 'Fruit name is missing in the input box! :('
      this.onDisplayError(err);
      return err;
    }
  }

  // Set displayError flag to display error
  onDisplayError = (error: string) => {
    this.setState({
      displayError: true,
      errorText: error
    });
  }

  // Reset displayError flag and error
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