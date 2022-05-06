import React from 'react';
import './App.css';
import Body from './Components/Body';
import Navigation from './Components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import ParticleBackground from './Components/ParticleBackground';

function App() {

  return (
    <>
    <ParticleBackground/>
    <div className="App">
      <Navigation/>
      <Body/>
      <Footer/>
      {/* </Particles> */}
    </div>
    </>
  );
}

export default App;
