import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import psqlIcon from '../../assets/images/psql-icon.png';
import './index.scss';

export default function About() {
  return (
    <div className='container about-page'>
      <div className='stacks'>
        <FontAwesomeIcon className='js-icon' icon={faJsSquare} />
        <FontAwesomeIcon className='react-icon' icon={faReact} />
        <FontAwesomeIcon className='nodeJs-icon' icon={faNodeJs} />
        <img className='psql-icon' src={psqlIcon} alt='psql icon' />
      </div>
      
      <div className='text-zone'>
        <h1>About Me</h1>
        <p>
          I am a very ambitious full stack developer looking for a role at
          an established and innovative company with opportunities to work with the latest technologies on challenging and diverse projects.
        </p>
        <p>
          I'm quietly confident, naturally curious, and patiently working on
          mastering my craft, one step at a time.
        </p>
        <p>
          If I were to define myself in one sentence, that would be a extroverted, bookworm, and tech-obsessed!!!
        </p>
      </div>
    </div>
  );
}
