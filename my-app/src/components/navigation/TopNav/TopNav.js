import './TopNav.css';
import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUtensils, faToilet, faDoorOpen, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function TopNav() {

    function authenticate() {
        document.getElementById('auth-popup').style.display="block";
    }


    return (
        <div className="top-nav-container">
            <FontAwesomeIcon id="house-icon" icon={faHouse} />
            <FontAwesomeIcon id="food-icon" icon={faUtensils} />
            <FontAwesomeIcon id="toilet-icon" icon={faToilet} />
            <FontAwesomeIcon id="door-icon" icon={faDoorOpen} />
            <FontAwesomeIcon id="auth-icon" icon={faArrowRightFromBracket} onClick={authenticate} />
        </div>
    );
}

export default TopNav;