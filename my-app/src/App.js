import './App.css';
import TopNav from './components/navigation/TopNav';
import BottomNav from './components/navigation/BottomNav';
import ButtonNav from './components/navigation/ButtonNav';
import 'bulma/css/bulma.min.css';
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCz1p1ZnITOG7oI16Rm7L27n-UQ1VgZKcg",
  authDomain: "tamagotchi-db.firebaseapp.com",
  databaseURL: "https://tamagotchi-db-default-rtdb.firebaseio.com",
  projectId: "tamagotchi-db",
  storageBucket: "tamagotchi-db.appspot.com",
  messagingSenderId: "621212893654",
  appId: "1:621212893654:web:7bf7945478230f41efa477",
  measurementId: "G-XH3DH9EZL1"
};
const app = initializeApp(firebaseConfig);



const database = getDatabase(app);

function App() {

  function closePopup() {
    document.getElementById('auth-popup').style.display="none";
  }

  function authenticateLogin() {
    document.getElementById('auth-popup').style.display="none";
  }

  function writeUserData(userId, name, email) {
    
    set(ref(database, 'users/' + userId), {
      username: name,
      email: email
    });
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
                        <button class="button is-danger" onClick={authenticateLogin} >log in</button>

                        <button class="button is-danger" onClick={writeUserData('1','liam','random@email')} >Write data</button>
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
