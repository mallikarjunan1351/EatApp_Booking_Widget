import React, { useState, useContext } from 'react'
import './App.css';
import { Reservation } from './Components/Reservation';
import { SlotContextProvider } from './Context/SlotContext';

function App() {

  const [showUser, setShowUser] = useState(false);

  return (
    <div className="App">
      <SlotContextProvider value={setShowUser}>
        <Reservation />
      </SlotContextProvider>
    </div>
  );
}

export default App;
