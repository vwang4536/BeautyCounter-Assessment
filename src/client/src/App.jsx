import React from 'react';
import './App.css';
import axios from 'axios';
import FruitDisplay from './components/FruitDisplay';

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
    }

    this.getFruits = this.getFruits.bind(this);
  }

  async getFruits() {
    try {
      const response = await axios.get('http://localhost:3000/fruits');
      this.setState({
        fruits: response.data
      });
      console.log(this.state)
    } catch (error) {
      console.log(error);
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
        <button onClick={this.getFruits} type="button">Get All Fruits</button>
        <div>
          {fruits.map((fruit) => {return <FruitDisplay fruit/>})}
        </div>
      </div>
    );
  }
}

export default App;
