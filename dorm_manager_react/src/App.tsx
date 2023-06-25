import React from 'react';
import Card from './componenst/Card';
// import '@material-ui/core/styles.css';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;