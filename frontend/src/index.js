import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="*"></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);