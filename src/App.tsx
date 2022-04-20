import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Upload } from './Components/Upload';
import { Text } from './Components/Text';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Speed Reader</h1>
        <Text></Text>
        {/* <Upload></Upload> */}
      </header>
    </div>
  );
}

export default App;
