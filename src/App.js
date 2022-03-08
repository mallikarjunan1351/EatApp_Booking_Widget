import React from 'react'
import './App.css';
import { Reservation } from './Components/Reservation';
import { SlotContextProvider } from './Context/SlotContext';

function App() {

  return (
    <div className="App">
      <SlotContextProvider>
        <Reservation />
      </SlotContextProvider>
    </div>
  );
}

export default App;
