import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/layout.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {/* Your existing app content goes here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;