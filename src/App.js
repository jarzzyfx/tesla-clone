import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './Pages/Main/Main';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
const App = () =>{
 

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
