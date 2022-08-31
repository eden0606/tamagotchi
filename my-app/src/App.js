import './App.css';
import TopNav from './components/navigation/TopNav';
import BottomNav from './components/navigation/BottomNav';
import ButtonNav from './components/navigation/ButtonNav';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        tamagotchi
      </header>
      <main class="tama-content-container">
      <TopNav/>
      <div className="tama-content">
        main tama screen stuff here
      </div>
      <BottomNav/>
      </main>
      
        <ButtonNav/>
    </div>
  );
}

export default App;
