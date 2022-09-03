import './ButtonNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';

function ButtonNav() {

    const icon_ids = ['house-icon', 'food-icon', 'toilet-icon', 'door-icon', 'auth-icon', 'mail-icon', 'chest-icon', 'book-icon', 'medicine-icon'];
    let currentNav = icon_ids[0];




    /* react hook that adds event listener to listen for key presses
    on key press, color of button changes to mimic button press effect, waits for a bit
    and then returns to normal color, then executes button functionality
    */
    useEffect(() => {
        window.addEventListener('keydown', event => {
            if (event.key === 'ArrowLeft') {
                document.getElementById('left-button').style.color='purple';
                setTimeout(() => { document.getElementById('left-button').style.color='lavender'; }, 100);
            
                cancel();
            }
            if (event.key === 'ArrowDown') {
                document.getElementById('center-button').style.color='purple';
                setTimeout(() => { document.getElementById('center-button').style.color='lavender'; }, 100);
            }
            if (event.key === 'ArrowRight') {
                document.getElementById('right-button').style.color='purple';
                setTimeout(() => { document.getElementById('right-button').style.color='lavender'; }, 100);

                move();
            }
        })
    });

    function move() {
        if (icon_ids.indexOf(currentNav) === 0) {
            document.getElementById(icon_ids[icon_ids.length - 1]).style.color='#4a4a4a';
            document.getElementById(icon_ids[0]).style.color='purple';
            currentNav = icon_ids[icon_ids.indexOf(currentNav) + 1];
        } else {
            document.getElementById(icon_ids[icon_ids.indexOf(currentNav) - 1]).style.color='#4a4a4a';
            document.getElementById(icon_ids[icon_ids.indexOf(currentNav)]).style.color='purple';

            if (icon_ids[icon_ids.indexOf(currentNav) + 1] === undefined) {
                currentNav = icon_ids[0];
            } else {
                currentNav = icon_ids[icon_ids.indexOf(currentNav) + 1];
            }
            
        }
    }

    function cancel() {
        if (icon_ids.indexOf(currentNav) === 0) {
            document.getElementById(icon_ids[0]).style.color='#4a4a4a';
        } else if(icon_ids.indexOf(currentNav) === icon_ids.length - 1) {
            document.getElementById(icon_ids[icon_ids.length - 1]).style.color='#4a4a4a';
        } else {
            document.getElementById(icon_ids[icon_ids.indexOf(currentNav) - 1]).style.color='#4a4a4a';
        }

        currentNav = icon_ids[0];
    }

    function enter() {

    }

    return (
        <div className="button-nav-container">
        <FontAwesomeIcon id="left-button" className="circle-button" icon={faCircleDot} onClick={cancel}/>
        <FontAwesomeIcon id="center-button" className="circle-button" icon={faCircleDot} onClick={enter}/>
        <FontAwesomeIcon id="right-button" className="circle-button" icon={faCircleDot} onClick={move}/>


        </div>
    );
}

export default ButtonNav;
