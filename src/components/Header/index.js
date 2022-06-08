import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const menuIcon = (
  <FontAwesomeIcon className='menu-icon'
    icon={faBars}
  />
  );
  
  return (
    <header>
      <span className='logo'>John Ngai</span>
      {menuIcon}
    </header>
  );
}