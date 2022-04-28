import ProjectList from './ProjectList';
import './index.scss';

export default function Portfolio() {
  return (
    <div className='container portfolio-page'>
      <div className='text-zone'>
        <h1>My Work</h1>
        <ProjectList />
      </div>
    </div>
  );
}
