import './BottomNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faToolbox, faBookOpen, faBriefcaseMedical, faMasksTheater } from '@fortawesome/free-solid-svg-icons';

function BottomNav() {

    return (
        <div className="bottom-nav-container">
            <FontAwesomeIcon id="mail-icon" icon={faEnvelope} />
            <FontAwesomeIcon id="chest-icon" icon={faToolbox} />
            <FontAwesomeIcon id="book-icon" icon={faBookOpen} />
            <FontAwesomeIcon id="medicine-icon" icon={faBriefcaseMedical} />
            <FontAwesomeIcon id="attention-icon" icon={faMasksTheater} />
        </div>
    );
}

export default BottomNav;