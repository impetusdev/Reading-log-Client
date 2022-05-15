import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// import { Upload } from './Components/Upload';
import { Text } from './Components/Text';
import { Read } from './Components/Read';
import { SignIn } from './Components/SignIn';
import { NavBar } from './Components/NavBar';
import { UserContext } from './Components/UserContext';
import { useState } from 'react';

import './App.scss';

interface IUserContext {
  user:{
      email: string,
      token: string,
  },
  setUser: () => void
}

function App() {

  const [user, setUser] = useState<any | null>({user: null});
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Speed Reader</h1>
        <BrowserRouter>
          <UserContext.Provider value={{user, setUser}}>
          <NavBar/>
            <Routes>
                <Route path='/' element={<Text/>} />
                <Route path='/all' element={<Read/>} />
                <Route path='/signin' element={<SignIn/>} />
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
        {/* <Upload></Upload> */}
      </header>
    </div>
  );
}

export default App;
