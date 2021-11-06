import React from 'react';
import './app.css';
import Header from './components/Header';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
    </div>
  );
}

export default App;
