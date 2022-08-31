import './TopNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUtensils, faToilet, faDoorOpen, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function TopNav() {

    return (
        <div className="top-nav-container">
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faUtensils} />
            <FontAwesomeIcon icon={faToilet} />
            <FontAwesomeIcon icon={faDoorOpen} />
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </div>
    );
}

export default TopNav;