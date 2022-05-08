import React from 'react';
import { Upload } from './Components/Upload';
import { Text } from './Components/Text';
import { Read } from './Components/Read';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Speed Reader</h1>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Text/>} />
            <Route path='/all' element={<Read/>} />
          </Routes>
        </BrowserRouter>
        {/* <Upload></Upload> */}
      </header>
    </div>
  );
}

export default App;
