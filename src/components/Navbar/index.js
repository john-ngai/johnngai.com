import classNames from "classnames";
import { Link } from "react-router-dom";
import './index.scss';

export default function Navbar(props) {
  const { toggleDisplay, displayMenu } = props;

  const menuClass = classNames('menu', {
    show: displayMenu, hide: !displayMenu,
  });

  return (
    <nav className={menuClass}>
      <ul>
        <Link to='/'>
          <li className="first-list-item" onClick={toggleDisplay}>Home</li>
        </Link>

        <Link to='/'>
          <li onClick={toggleDisplay}>About</li>
        </Link>
        
        <Link to='projects'>
          <li onClick={toggleDisplay}>Projects</li>
        </Link>
        
        <Link to='/'>
          <li onClick={toggleDisplay}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}