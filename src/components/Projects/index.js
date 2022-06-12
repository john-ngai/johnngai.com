import './index.scss';

export default function Projects() {
  return (
    <section className='container projects'>

      <div className='featured-projects'>
        <h2>Featured Projects</h2>

        <div className='project-item'>
          <img src='https://raw.githubusercontent.com/john-ngai/simpli/john/scheduler/docs/02_projects%26deliverables.png' />
          <h3>Simpli</h3>
          <h4>Team-based project tracking app</h4>
          <p>JavaScript, SQL, HTML/CSS</p>
          <p>Express, React, jsonwebtoken</p>
        </div>

        <div className='project-item'>
          <img src='https://raw.githubusercontent.com/john-ngai/simpli/john/scheduler/docs/02_projects%26deliverables.png' />
          <h3>Simpli</h3>
          <h4>Team-based project tracking app</h4>
          <p>JavaScript, SQL, HTML/CSS</p>
          <p>Express, React, jsonwebtoken</p>
        </div>
      </div>

      <div className='all-projects'>
        <h2>All Projects</h2>
      </div>
    </section>
  );
}