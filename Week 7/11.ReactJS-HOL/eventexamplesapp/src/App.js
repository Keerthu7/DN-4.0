import React from 'react';
import CounterComponent from './components/CounterComponent';
import WelcomeComponent from './components/WelcomeComponent';
import SyntheticEventComponent from './components/SyntheticEventComponent';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>React Event Handling Lab</h1>
      <CounterComponent />
      <WelcomeComponent />
      <SyntheticEventComponent />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
