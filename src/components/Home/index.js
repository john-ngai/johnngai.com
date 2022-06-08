import profile from '../../images/profile.png';
import './index.scss';

export default function Home() {
  return (
    <div className='container home-page'>
      <img src={profile} alt='profile' />

      <div className='text-zone author'>
        <h1>Hi, I'm John 👋</h1>
        <h3>Full Stack Developer</h3>
        <button>About Me</button>
      </div>

      <div className='text-zone projects'>
        <h3>Featured Projects</h3>
      </div>
    </div>
  );
}