import { Link } from 'react-router-dom';
import profile from '../../assets/images/profile.png';
import './index.scss';

export default function Home() {
  return (
    <div className='container home-page'>
      <img src={profile} alt='profile' />
      <div className='text-zone'>
        <h1>Hi, I'm John 👋</h1>
        <h2>Full Stack Developer</h2>
        <Link to='/portfolio' className='button'>
          SEE MY WORK
        </Link>
      </div>
    </div>
  );
}
