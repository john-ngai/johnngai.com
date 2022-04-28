import { faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import psqlIcon from '../../assets/images/psql-icon.png';
import railsIcon from '../../assets/images/rails-icon.png';
import javaIcon from '../../assets/images/java-icon.png';
import tsIcon from '../../assets/images/typescript-icon.png';
import './index.scss';

export default function Skills() {
  return (
    <div className='container skills-page'>
      <div className='text-zone'>
        <h1>Skills</h1>
        <p>
          Proficient in full stack development with my primary stacks being
          JavaScript, React, NodeJs, and PostgreSQL.
        </p>
        <p>
          Although I consider myself a junior developer, I have a good sense of
          organization, attention-to-detail, and am a quick learner. I am proud
          of my work and believe that writing clean quality code is an expression
          of my craftsmanship and professionalism. I would love to contribute to
          next project, and continue to provide any kind of support thereafter.
        </p>
        <p>
          Feel free to check out my profile on <a href='https://www.linkedin.com/in/john-ngai/' target='_blank'>LinkedIn</a>, or view my cv with this <a href='https://docs.google.com/document/d/17OXadtT4VOeEQQNG9BC4gma6pYHWYZw7_JcYxogQZJU/edit?usp=sharing' target='_blank'>link</a>.
        </p>

        <h1>Experience</h1>
        <p>
          As a developer, I strive for mastery, and understand that consistent continued
          education is essential. Below is a snap-shot of my current experience measured
          across multiple programming languages:
        </p>

        <div className='stacks'>
          
          <h2>&gt;5000 lines</h2>
          <div className='stacks box'>
            <FontAwesomeIcon className='js-icon' icon={faJsSquare} />
            <span className='stack-name'>JavaScript</span>
          </div>
          <div className='stacks box'>
            <FontAwesomeIcon className='react-icon' icon={faReact} />
            <span className='stack-name'>React</span>
          </div>

          <br /><br />

          <h2>&lt;1000 lines</h2>
          <div className='stacks box'>
            <img className='psql-icon' src={psqlIcon} alt='PostgresSQL icon' />
            <span className='stack-name'>PostgreSQL</span>
          </div>
          <div className='stacks box'>
            <img className='rails-icon' src={railsIcon} alt='Ruby on Rails icon' />
            <span className='stack-name'>Ruby on Rails</span>
          </div>

          <br /><br />

          <h2>Actively Learning</h2>
          <div className='stacks box'>
            <img className='java-icon' src={javaIcon} alt='Java icon' />
            <span className='stack-name'>Java</span>
          </div>
          <div className='stacks box'>
            <img className='ts-icon' src={tsIcon} alt='TypeScript icon' />
            <span className='stack-name'>TypeScript</span>
          </div>

        </div>

      </div>
    </div>
  );
}
