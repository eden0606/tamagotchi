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
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faUtensils} />
            <FontAwesomeIcon icon={faToilet} />
            <FontAwesomeIcon icon={faDoorOpen} />
            <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={authenticate} />
        </div>
    );
}

export default TopNav;