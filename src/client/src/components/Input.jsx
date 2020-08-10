import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputText: '',
    }
  }

  setText = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  }
  
  render() {
    const getFruit = this.props.getFruit;
    const name = this.state.inputText;
    
    return (
      <div className="inputContainer">
        <input className="fruitInput" onChange={this.setText} type="text" id="inputbox" placeholder="Input a fruit name to look up its info!"/>
        <input className="fruitButton"onClick={() => {getFruit(name)}} type="submit" value="Get Fruit!"/>
      </div>
    )
  }
}

export default Input;