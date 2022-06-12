import './index.scss';

export default function FeaturedProjects(props) {
  const {
    name, description, languages,
    frameworks, website, image,
  } = props;

  return (
    <div className='project-item'>
      <img src={image} />
      <h3>{name}</h3>
      <h4>{description}</h4>
      <p>{languages}</p>
      <p>{frameworks}</p>
    </div>
  );
}