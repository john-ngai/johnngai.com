import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

export default function Footer() {
  const linkedInIcon = (
    <a href='https://www.linkedin.com/in/john-ngai/'
      target='_blank'
      rel='noreferrer'
    >
      <FontAwesomeIcon className='linkedin-icon'
        icon={faLinkedin}
      />
    </a>
  );
  const githubIcon = (
    <a href='https://github.com/john-ngai'
      target='_blank'
      rel='noreferrer'
    >
      <FontAwesomeIcon className='github-icon'
        icon={faGithub}
      />
    </a>
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