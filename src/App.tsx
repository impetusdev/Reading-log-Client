import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { Upload } from './Components/Upload';
import { Text } from './Components/Text';
import { Read } from './Components/Read';
import { NavBar } from './Components/NavBar';
import logo from './logo.svg';
import './App.scss';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Speed Reader</h1>
        <BrowserRouter>
          <NavBar/>
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
