import logo from './logo.svg';
import './App.css';
import { Reservation } from './Components/Reservation';
import { UserInfo } from './Components/UserInfo';
import { SlotContextProvider } from './Context/SlotContext';

function App() {
  return (
    <div className="App">
      <SlotContextProvider>
        <Reservation />
        <UserInfo />
      </SlotContextProvider>
    </div>
  );
}

export default App;
