import React from 'react';
import ReactDOM from 'react-dom';
import Previewer from './components/previewer';

const App = () => {
  return (
    <Previewer />
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));