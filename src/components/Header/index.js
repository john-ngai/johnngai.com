import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import classNames from 'classnames';

export default function Header() {
  const [display, setDisplay] = useState(false);
  
  const menuClass = classNames('menu', {
    show: display, hide: !display,
  });

  const toggleDisplay = () => setDisplay(prev => !prev);

  const menuIcon = (
  <FontAwesomeIcon className='menu-icon'
    icon={faBars}
    onClick={toggleDisplay}
  />
  );
  
  return (
    <header>
      <span className='logo'>John Ngai</span>
      {menuIcon}
      <nav className={menuClass}>
        <ul>
          <li onClick={toggleDisplay}>Home</li>
          <li onClick={toggleDisplay}>About</li>
          <li onClick={toggleDisplay}>Projects</li>
          <li onClick={toggleDisplay}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}