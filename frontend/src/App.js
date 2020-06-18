import './app.css'
import React from 'react';
import NavBar from './components/NavBar/NavBar'
import Routes from './routes'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
