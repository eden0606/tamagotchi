import './App.css';
import TopNav from './components/navigation/TopNav';
import BottomNav from './components/navigation/BottomNav';
import ButtonNav from './components/navigation/ButtonNav';
import 'bulma/css/bulma.min.css';
import getFirebaseClient from './firebase/firebaseClient';
import { getDatabase, set, ref, onValue } from "firebase/database";
// import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
// import verifyToken from "../components/general/auth/token/verifyToken";
// import UserContext from "../components/general/context/UserContext";
// 



const app = getFirebaseClient();
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

  const userRef = ref(database, 'users/' + 1);

  function readUserData(userRef){
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      
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

                        <button class="button is-danger" onClick={() => writeUserData('1','liam','random@email')} >Write data</button>
                        <button class="button is-danger" onClick={() => readUserData(userRef)} >Read data</button>
                        

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
