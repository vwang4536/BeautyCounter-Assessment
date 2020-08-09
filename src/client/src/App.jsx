import React from 'react';
import './App.css';
import axios from 'axios';
import FruitDisplay from './components/FruitDisplay';
import Input from './components/Input';

// function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fruits: [],
      inputText: '',
      displayError: false,
    }
  }

  getFruits = async () => {
    try {
      const response = await axios.get('http://localhost:3000/fruits');
      this.setState({
        fruits: response.data
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
        fruits: response.data
      });
    } catch (error) {
      console.log(error.response.data)
      this.setState({
        fruits: [],
        displayError: true,
      });
    }
  }

  render() {
    const fruits = this.state.fruits;

    return (
      <div className="App">
        {/* <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> */}
        <Input getFruit={this.getFruit}/>
        <button onClick={this.getFruits} type="button">Get All Fruits!</button>
        <div>
          {fruits.map((fruit) => {return <FruitDisplay key={fruit.name} fruit={fruit}/>})}
        </div>
      </div>
    );
  }
}

export default App;
