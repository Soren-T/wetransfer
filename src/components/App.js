import React from 'react';
// styles
import '../styles/App.css';
// components
import Nav from './Nav';
import Upload from './Upload';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main">
        <Upload />
      </div>
    </div>
  );
}

export default App;
