import texture from '../../../assets/images/texture.png';
import './index.scss';

export default function ProjectList() {
  return (
    <div className='container projects-page'>
      
      <a href='https://github.com/john-ngai/johnngai.com' target='blank'>
        <div className='project-item'>
          <span className='title'>JohnNgai.com</span>
          <span className='background'>
            <img src={texture} alt='textured background' />
          </span>
          <span className='description'>My personal portfolio website</span>
          <span className='stacks'>React, sass, @fortawesome</span>
        </div>
      </a>

      <a href='https://joiemuskoka.com/' target='blank'>
        <div className='project-item'>
          <span className='title'>JoieMuskoka.com</span>
          <span className='background'>
            <img src={texture} alt='textured background' />
          </span>
          <span className='description'>Client website for a high-end cottage Airbnb in Canada</span>
          <span className='stacks'>Wordpress</span>
        </div>
      </a>

      <a href='https://github.com/john-ngai/simpli-v2' target='blank'>
        <div className='project-item'>
          <span className='title'>Simpli</span>
          <span className='background'>
            <img src={texture} alt='textured background' />
          </span>
          <span className='description'>A team-based project tracking productivity app</span>
          <span className='stacks'>Express, React, jsonwebtoken, PostgreSQL</span>
        </div>
      </a>

      <a href='https://github.com/john-ngai/jungle-rails' target='blank'>
        <div className='project-item'>
          <span className='title'>Jungle</span>
          <span className='background'>
            <img src={texture} alt='textured background' />
          </span>
          <span className='description'>A mini eCommerce app</span>
          <span className='stacks'>Rails 4.2, PostgresSQL, Stripe</span>
        </div>
      </a>

      <a href='https://github.com/john-ngai/scheduler' target='blank'>
        <div className='project-item'>
          <span className='title'>Interview Scheduler</span>
          <span className='background'>
            <img src={texture} alt='textured background' />
          </span>
          <span className='description'>App that allows users to book and cancel interviews</span>
          <span className='stacks'>Express, React, Axios, classnames</span>
        </div>
      </a>

      <a href='https://github.com/john-ngai/resource-haven' target='blank'>
        <div className='project-item'>
          <span className='title'>Resource Haven</span>
          <span className='background'>
            <img src={texture} alt='textured background' />
          </span>
          <span className='description'>Inspired by Pinterest - Allows users to save various learning resources</span>
          <span className='stacks'>Express, jQuery, sass, PostgreSQL</span>
        </div>
      </a>

      <a href='https://github.com/john-ngai/tweeter' target='blank'>
        <div className='project-item'>
          <span className='title'>Tweeter</span>
          <span className='background'>
            <img src={texture} alt='textured background' />
          </span>
          <span className='description'>Simple, single-page Twitter clone</span>
          <span className='stacks'>Express, jQuery, MD5</span>
        </div>
      </a>

      <a href='https://github.com/john-ngai/tinyapp' target='blank'>
        <div className='project-item'>
          <span className='title'>TinyApp</span>
          <span className='background'>
            <img src={texture} alt='textured background' />
          </span>
          <span className='description'>bit.ly clone that allows users to shorten long URLs</span>
          <span className='stacks'>Express, EJS, bcrypt, cookie-session</span>
        </div>
      </a>

      <a href='https://github.com/john-ngai/lotide' target='blank'>
        <div className='project-item'>
          <span className='title'>Lotide</span>
          <span className='background'>
            <img src={texture} alt='textured background' />
          </span>
          <span className='description'>A mini clone of the Lodash library.</span>
          <span className='stacks'>JavaScript</span>
        </div>
      </a>

    </div>
  );
}
