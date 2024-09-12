import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import About from './pages/About';
import Blog from './pages/Blog';


function App() {
  return (
    <Router>
      <div className="App">
       
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
           
          </Routes>
        </main>
        
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
