import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const linkedInIcon = (
    <FontAwesomeIcon className='linkedin-icon'
      icon={faLinkedin}
    />
  );
  const githubIcon = (
    <FontAwesomeIcon className='github-icon'
      icon={faGithub}
    />
  );

  return (
    <footer>
      <span className='social-icons'>
        {linkedInIcon}
        {githubIcon}
      </span>
      <span className="copyright">&copy; 2022 John Ngai</span>
    </footer>
  );
}