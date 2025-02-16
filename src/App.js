import React from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import './App.css';

// Main App Component
const App = () => (
  <div className="w-full h-screen">
    <FirstPage />
    <SecondPage />
    <ThirdPage />
    <FourthPage />
  </div>
);

export default App;
