import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Hero, Features, Advantages, Testimonials, Banner, FAQ, Footer } from './components';


function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <Features />
      <Advantages />
      <Testimonials />
      <FAQ />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
