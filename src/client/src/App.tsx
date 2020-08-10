import React, { FunctionComponent } from 'react';
import './App.css'; 
import MainContainer from './containers/MainContainer';

const App: FunctionComponent = () => {
  return (
    <div className='app'>
      <MainContainer />
    </div>
  );
};

export default App;
