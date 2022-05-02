import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png';
import './index.scss';

export default function Navbar() {
  return (
    <header className='navbar'>
      <Link className='logo' to='/'>
        <img src={logo} alt='logo' />
      </Link>

      <nav>
        <NavLink to='/' exact='true'>Welcome</NavLink>
        <NavLink to='/about' className='about-link'>About</NavLink>
        <NavLink to='/skill' className='skills-link'>Skills</NavLink>
        <NavLink to='/portfolio' className='portfolio-link'>My Work</NavLink>
        <NavLink to='/contact' className='contact-link'>Contact</NavLink>
      </nav>

      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/john-ngai/'
            target='_blank'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/john-ngai/'
            target='_blank'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>

      <FontAwesomeIcon className='bars-icon' icon={faBars} />
    </header>
  );
}
