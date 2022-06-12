import classNames from 'classnames';
import './index.scss';

export default function FeaturedProjects(props) {
  const {
    name, description,
    languages, frameworks,
    website, image,
    featured,
  } = props;

  const projectClass = classNames('project-item', {
    featured: featured, other: !featured,
  });

  return (
    <div className={projectClass}>
      <a href={website} target='_blank' rel='noreferrer'>
        {image && <img src={image} />}
        <h3>{name}</h3>
        <h4>{description}</h4>
        <p>{languages}</p>
        <p>{frameworks}</p>
      </a>
    </div>
  );
}