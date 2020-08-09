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
      <div>
        <input onChange={this.setText} type="text" id="inputbox"/>
        <input onClick={() => {getFruit(name)}} type="submit" value="Get Fruit!"/>
      </div>
    )
  }
}

export default Input;