import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

export default function Header(props) {
  const menuIcon = (
  <FontAwesomeIcon className='menu-icon'
    icon={faBars}
    onClick={props.toggleDisplay}
  />
  );
  
  return (
    <header>
      <span className='logo'>John Ngai</span>
      {menuIcon}
    </header>
  );
}