import './ButtonNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

function ButtonNav() {

    return (
        <div className="button-nav-container">
        <FontAwesomeIcon className="circle-button" icon={faCircleDot} />
        <FontAwesomeIcon className="circle-button" icon={faCircleDot} />
        <FontAwesomeIcon className="circle-button" icon={faCircleDot} />


        </div>
    );
}

export default ButtonNav;
