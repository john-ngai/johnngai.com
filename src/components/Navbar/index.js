import classNames from "classnames";
import './index.scss';

export default function Navbar(props) {
  const { toggleDisplay, displayMenu } = props;
  
  const menuClass = classNames('menu', {
    show: displayMenu, hide: !displayMenu,
  });
  
  return (
    <nav className={menuClass}>
      <ul>
          <li onClick={toggleDisplay}>Home</li>
          <li onClick={toggleDisplay}>About</li>
          <li onClick={toggleDisplay}>Projects</li>
          <li onClick={toggleDisplay}>Contact</li>
        </ul>
    </nav>
  );
}