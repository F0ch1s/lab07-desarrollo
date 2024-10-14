import {React,createContext} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PageStruct from './PageStruct';
import { HomePage } from './HomePage';
import { LogInPage } from './LogInPage';
import { useState } from 'react';
import { Catalogo } from './Catalogo';
import { PageNotFound } from './PageNotFound';

export const LoginContext = createContext();

const App1 = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username, password) => {
    if (username === 'user' && password === '8765') {
      setUser({ username });
      setIsAuthenticated(true);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <LoginContext.Provider value={{ user, isAuthenticated, login, logout }}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageStruct/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='/login' element={<LogInPage/>}/>
                    <Route path='/catalogo' element={isAuthenticated ? <Catalogo/> : <PageNotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </LoginContext.Provider>
  )
}

export default App1;