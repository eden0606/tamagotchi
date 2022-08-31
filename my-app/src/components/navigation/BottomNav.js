import './BottomNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faToolbox, faBookOpen, faBriefcaseMedical, faMasksTheater } from '@fortawesome/free-solid-svg-icons';

function BottomNav() {

    return (
        <div className="bottom-nav-container">
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faToolbox} />
            <FontAwesomeIcon icon={faBookOpen} />
            <FontAwesomeIcon icon={faBriefcaseMedical} />
            <FontAwesomeIcon icon={faMasksTheater} />
        </div>
    );
}

export default BottomNav;