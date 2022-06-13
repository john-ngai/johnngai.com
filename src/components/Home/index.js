import { Link } from 'react-router-dom';
import profile from '../../images/profile.png';
import './index.scss';

export default function Home() {
  return (
    <div className='container home-page'>
      <img src={profile} alt='profile' />

      <div className='text-zone'>
        <h1>Hi, I'm John 👋</h1>
        <h3>Full Stack Developer</h3>
        <p>
          I'm a Web Developer in Toronto, Canada. I love working on creative projects and playing around with the latest technologies! This website is my digital archive - a collection of the things I've learned and created.
        </p>
        <Link to='projects'>
          <button>SEE MY WORK</button>
        </Link>
      </div>
    </div>
  );
}