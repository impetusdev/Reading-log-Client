import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// import { Upload } from './Components/Upload';
import { Text } from './Components/Text';
import { Read } from './Components/Read';
import { SignUp } from './Components/SignUp';
import { NavBar } from './Components/NavBar';
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
            <Route path='/signup' element={<SignUp/>} />
          </Routes>
        </BrowserRouter>
        {/* <Upload></Upload> */}
      </header>
    </div>
  );
}

export default App;
