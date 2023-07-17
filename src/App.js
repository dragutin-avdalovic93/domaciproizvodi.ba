import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AddProducerPage from './pages/AddProducerPage';
import MapPage from './pages/MapPage';
import AboutPage from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/o-nama" element={<AboutPage />} />
              <Route path="/dodaj-proizvodjaca" element={<AddProducerPage />} />
              <Route path="/" element={<MapPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
