import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/images/logo.png';
import './index.scss';

export default function Navbar() {
  return (
    <header className='navbar'>
      <Link className='logo' to='/'>
        <img src={logo} alt='logo' />
      </Link>

      <input id="menu-button" class="menu-button" type="checkbox" />
      <label class="menu-icon" for="menu-button">
        <span class="navicon" />
      </label>

      <nav className='nav-links'>
        <NavLink to='/' exact='true'>Welcome</NavLink>
        <NavLink to='/about' className='about-link'>About</NavLink>
        <NavLink to='/skill' className='skills-link'>Skills</NavLink>
        <NavLink to='/portfolio' className='portfolio-link'>My Work</NavLink>
        <NavLink to='/contact' className='contact-link'>Contact</NavLink>
      </nav>

      <nav className='nav-social'>
        <a
          href='https://www.linkedin.com/in/john-ngai/'
          target='_blank'
          rel="noopener"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href='https://github.com/john-ngai/'
          target='_blank'
          rel="noopener"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </nav>

    </header>
  );
}
