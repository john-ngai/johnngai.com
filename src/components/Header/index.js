import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const menuIcon = (
  <FontAwesomeIcon className='menu-icon'
    icon={faBars}
    onClick={props.toggleDisplay}
  />
  );
  
  return (
    <header>
      <Link to='/'>
        <span className='logo'
          onClick={props.hideDisplay}
        >John Ngai</span>
      </Link>
      {menuIcon}
    </header>
  );
}