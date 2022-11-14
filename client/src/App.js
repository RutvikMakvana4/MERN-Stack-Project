import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About  from './components/About';
import Contact from './components/Contact'; 
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>

    

    <Routes>
    <Route exact path="/" element={<Home />} >
    </Route>

    <Route path="/about" element={<About />}>  
    </Route>

    <Route path="/contact" element={<Contact />}>
    </Route>

    <Route path="/login" element={<Login />}>
    </Route>

    <Route path="/signup" element={<Signup />}>
    </Route>
    
    <Route element={<Errorpage />} >
    </Route>

    
    </Routes>
    

    </BrowserRouter>
    
    
  )
}

export default App