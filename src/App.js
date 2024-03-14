import React from 'react';
import Login from './Login';
import HomePage from './Homepage';


import {BrowserRouter, Route, Routes} from 'react-router-dom'
 
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/login' exact Component={Login} />
     
      <Route path='/' exact Component={HomePage} />
       
       
       
    </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App