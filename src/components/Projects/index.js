import ProjectItem from './ProjectItem';
import './index.scss';

export default function Projects({ projectsData }) {
  const featuredProjectsData = projectsData.filter(project => project.featured === true);
  const featuredProjectElements = featuredProjectsData.map(project => (
    <ProjectItem
      key={project.id}
      name={project.name}
      description={project.description}
      languages={project.languages}
      frameworks={project.frameworks}
      website={project.website}
      image={project.image}
      featured={project.featured}
    />
  ));

  const otherProjectsData = projectsData.filter(project => project.featured === false);
  const otherProjectElements = otherProjectsData.map(project => (
    <ProjectItem
      key={project.id}
      name={project.name}
      description={project.description}
      languages={project.languages}
      frameworks={project.frameworks}
      website={project.website}
      image={project.image}
      featured={project.featured}
    />
  ));

  return (
    <section className='container projects'>
      
      <div className='featured-projects'>
        <h2>Featured Projects</h2>

        <div className='project-items'>
          {featuredProjectElements}
        </div>
      </div>

      <div className='other-projects'>
        <h2>Other Projects</h2>
        {otherProjectElements}
      </div>
    </section>
  );
}