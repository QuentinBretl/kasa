import { Link } from 'react-router-dom';

function AccomodationItem({ item }) {
  const imageStyle = {
    backgroundImage:
      'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(' +
      item.cover +
      ')',
  };

  return (
    <Link className='card' style={imageStyle} to={`/accomodation/${item.id}`}>
      <p className='accomodation-title'>{item.title}</p>
    </Link>
  );
}

export default AccomodationItem;
