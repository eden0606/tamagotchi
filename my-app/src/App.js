import './App.css';
import TopNav from './components/navigation/TopNav/TopNav';
import BottomNav from './components/navigation/BottomNav/BottomNav';
import ButtonNav from './components/navigation/ButtonNav/ButtonNav';
import 'bulma/css/bulma.min.css';

function App() {

  function closePopup() {
    document.getElementById('auth-popup').style.display="none";
  }

  return (
    <div className="App">
      <header className="header">
        tamagotchi
      </header>
      <main className="tama-content-container">
        <TopNav />
        <div className="tama-content">
          <div className="auth-popup" id="auth-popup">
          <div className="card">
                <div className="card-content">
                    <div className="content">
                    <button id="exit-button" class="delete" aria-label="delete" onClick={closePopup}></button>
                        <h1>log in</h1>
                        <label>username</label>
                        <input class="input" type="text" placeholder="username"></input>
                        <label>password</label>
                        <input class="input" type="text" placeholder="password"></input>
                        <button class="button is-danger">log in</button>
                        sign up
                    </div>
                </div>
            </div>
          </div>
          main tama screen stuff here
        </div>
        <BottomNav />
      </main>

      <ButtonNav />
    </div>
  );
}

export default App;
