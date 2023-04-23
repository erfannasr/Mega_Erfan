import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Index';
import Signin from './Component/Signin/Index';
import Home from './Pages/Index';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<Home />} exact/>
        <Route path='signin' element={<Signin />} />
      </Routes>

    </Router>
  );
};

export default App;