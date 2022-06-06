import { useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [display, setDisplay] = useState(false);
  
  const navbarListClass = classNames('navbar-list', {
    show: display, hide: !display,
  });

  const toggleDisplay = () => setDisplay(prev => !prev);

  const burgerIcon = (
    <div className='container--icon'>
      <FontAwesomeIcon className='icon--burger-bars'
        icon={faBars}
        onClick={toggleDisplay}
      />
    </div>
  );

  return (
    <header>
      <nav className='navbar'>
        {burgerIcon}
        <ul className={navbarListClass}>
          <li onClick={toggleDisplay}>Home</li>
          <li onClick={toggleDisplay}>About</li>
          <li onClick={toggleDisplay}>Projects</li>
          <li onClick={toggleDisplay}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}